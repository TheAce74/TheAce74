import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

async function main() {
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: "custom",
    ssr: { noExternal: ["use-click-away-react"] },
  });

  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const appHtml = render();

  await vite.close();

  const outPath = path.join(root, "dist", "index.html");
  const template = fs.readFileSync(outPath, "utf-8");
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(outPath, html);

  console.log(`Prerendered ${outPath} with real content`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
