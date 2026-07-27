import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { preview } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

async function main() {
  const server = await preview({
    root,
    preview: { port: 4174, strictPort: true },
  });
  const url = server.resolvedUrls.local[0];

  const browser = await chromium.launch();
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  await page.goto(url, { waitUntil: "networkidle" });
  // Wait for real app content to mount before snapshotting.
  await page.waitForSelector(".profile__title h1");
  await page.waitForSelector(".home__heading");

  const html = await page.content();

  if (consoleErrors.length > 0) {
    console.error("Console errors during prerender:", consoleErrors);
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
    process.exit(1);
  }

  const outPath = path.join(root, "dist", "index.html");
  fs.writeFileSync(outPath, html);

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));

  console.log(`Prerendered ${outPath} with real content`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
