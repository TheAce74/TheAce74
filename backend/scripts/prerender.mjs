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
  });

  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
  let appHtml = render();

  await vite.close();

  // ssrLoadModule resolves asset imports (images, PDFs, etc.) to dev-server
  // paths like /src/assets/foo.svg, which don't exist in the production
  // build. Remap them to the real hashed output paths via the build manifest.
  const manifestPath = path.join(root, "dist", "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  for (const key of Object.keys(manifest)) {
    const entry = manifest[key];
    if (entry.file && entry.file !== key) {
      appHtml = appHtml.split(`/${key}`).join(`/${entry.file}`);
    }
  }

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
