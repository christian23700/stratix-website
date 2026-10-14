// Renders every design/visuals/*.html scene to public/images/visuals/<name>.png.
// Usage: node scripts/render-visuals.mjs [name ...]
// Needs a Chromium for Playwright (PLAYWRIGHT_BROWSERS_PATH) or a local Chrome install.
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "design", "visuals");
const outDir = path.join(root, "public", "images", "visuals");
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg" };

const publicDir = path.join(root, "public");

// Serves design/visuals, plus the site's public folder under /public/ (scenes can reuse its images).
const server = http.createServer(async (req, res) => {
  const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const [dir, rel] = url.startsWith("/public/") ? [publicDir, url.slice("/public".length)] : [srcDir, url];
  const file = path.join(dir, rel);
  if (!file.startsWith(dir)) return res.writeHead(403).end();
  try {
    res.writeHead(200, { "content-type": types[path.extname(file)] || "application/octet-stream" });
    res.end(await fs.readFile(file));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

const only = process.argv.slice(2);
const scenes = (await fs.readdir(srcDir)).filter((f) => f.endsWith(".html")).map((f) => f.slice(0, -5)).filter((n) => !only.length || only.includes(n));

let browser;
try {
  browser = await chromium.launch();
} catch {
  browser = await chromium.launch({ channel: "chrome" });
}

await fs.mkdir(outDir, { recursive: true });
for (const name of scenes) {
  const html = await fs.readFile(path.join(srcDir, `${name}.html`), "utf8");
  const [w, h] = (html.match(/name="size" content="(\d+)x(\d+)"/) || [, 1600, 1000]).slice(1).map(Number);
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await page.goto(`${base}/${name}.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(outDir, `${name}.png`) });
  await page.close();
  console.log(`rendered ${name} (${w}x${h})`);
}

await browser.close();
server.close();
