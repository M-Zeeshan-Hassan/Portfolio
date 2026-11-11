// Generates public/og-image.png (1200x630) for social link previews.
// Run manually: node scripts/generate-og-image.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, "../public/og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="100%" height="100%" fill="#000000"/>
  <text x="50%" y="290" text-anchor="middle"
        font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="96" font-weight="700" fill="#ffffff">
    Zeeshan Hassan
  </text>
  <text x="50%" y="370" text-anchor="middle"
        font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="40" fill="#9ca3af">
    Software Engineer · Python, AI, Automation
  </text>
  <text x="50%" y="570" text-anchor="middle"
        font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="26" fill="#6b7280">
    mzh-portfolio.netlify.app
  </text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`Wrote ${outPath}`);
