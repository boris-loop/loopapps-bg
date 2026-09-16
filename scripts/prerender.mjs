import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const serverOutput = resolve(root, "dist/server/entry-server.js");
const { renderPage } = await import(pathToFileURL(serverOutput).href);

const pages = [
  { pathname: "/", file: "index.html" },
  { pathname: "/privacy", file: "privacy.html" },
  { pathname: "/products/field-brief", file: "products/field-brief.html" },
  { pathname: "/404", file: "404.html" },
];

for (const page of pages) {
  const outputPath = resolve(root, "dist", page.file);
  const template = await readFile(outputPath, "utf8");
  const rootElement = '<div id="root"></div>';

  if (!template.includes(rootElement)) {
    throw new Error(`Unable to find the React root in ${page.file}`);
  }

  const html = template.replace(rootElement, `<div id="root">${renderPage(page.pathname)}</div>`);
  await writeFile(outputPath, html);
}

await rm(resolve(root, "dist/server"), { recursive: true, force: true });
