import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, "..", "src", "assets");
const heroJpg = path.join(assetsDir, "hero-background.jpg");
const heroWebp = path.join(assetsDir, "hero-background.webp");

async function optimizeHero() {
  if (!fs.existsSync(heroJpg)) {
    console.log("Hero JPG not found, skipping image optimization.");
    return;
  }

  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.warn("sharp not installed; run npm install to optimize hero WebP.");
    return;
  }

  await sharp(heroJpg)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(heroWebp);

  const webpSize = fs.statSync(heroWebp).size;
  console.log(`Optimized hero WebP: ${Math.round(webpSize / 1024)} KB`);
}

optimizeHero().catch((error) => {
  console.error(error);
  process.exit(1);
});
