import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

async function processLogo() {
  const inputPath = path.join(rootDir, "src/assets/logo.png");
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const out = Buffer.alloc(width * height * 4);

  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const minC = Math.min(r, g, b);
      let alpha = 0;
      if (minC < 252) {
        alpha = Math.min(255, Math.max(0, Math.round(((252 - minC) / 252) * 255)));
      }

      if (alpha > 4) {
        const aNorm = alpha / 255;
        const bg = 254;
        let trueR = Math.min(255, Math.max(0, Math.round((r - (1 - aNorm) * bg) / aNorm)));
        let trueG = Math.min(255, Math.max(0, Math.round((g - (1 - aNorm) * bg) / aNorm)));
        let trueB = Math.min(255, Math.max(0, Math.round((b - (1 - aNorm) * bg) / aNorm)));

        out[idx] = trueR;
        out[idx + 1] = trueG;
        out[idx + 2] = trueB;
        out[idx + 3] = alpha;

        if (alpha > 12) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      } else {
        out[idx] = 0;
        out[idx + 1] = 0;
        out[idx + 2] = 0;
        out[idx + 3] = 0;
      }
    }
  }

  const bboxW = maxX - minX + 1;
  const bboxH = maxY - minY + 1;
  console.log(`Detected logo bbox: (${minX}, ${minY}) to (${maxX}, ${maxY}), size: ${bboxW}x${bboxH}`);

  // Optical padding: 24px on each side for balanced spacing
  const pad = 24;

  // Extract the cropped region from original image (handling edge clamping)
  const extractLeft = Math.max(0, minX);
  const extractTop = Math.max(0, minY);
  const extractW = Math.min(width - extractLeft, bboxW);
  const extractH = Math.min(height - extractTop, bboxH);

  // Extract cropped buffer
  const cropped = await sharp(out, { raw: { width, height, channels: 4 } })
    .extract({ left: extractLeft, top: extractTop, width: extractW, height: extractH })
    .extend({
      top: pad,
      bottom: pad,
      left: pad,
      right: pad,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  const finalMeta = await sharp(cropped).metadata();
  console.log(`Final transparent logo size: ${finalMeta.width}x${finalMeta.height}, ratio: ${(finalMeta.width / finalMeta.height).toFixed(3)}`);

  // Write to public/images/logo.png and public/images/logo-transparent.png
  // Also preserve original backup at public/images/logo-original.png if not present
  const origBackup = path.join(rootDir, "public/images/logo-original.png");
  try {
    await sharp(inputPath).toFile(origBackup);
  } catch {
    // ignore
  }

  const publicLogoPath = path.join(rootDir, "public/images/logo.png");
  await sharp(cropped).toFile(publicLogoPath);
  console.log(`Overwritten ${publicLogoPath} with transparent cropped logo!`);

  const publicTransPath = path.join(rootDir, "public/images/logo-transparent.png");
  await sharp(cropped).toFile(publicTransPath);
  console.log(`Wrote ${publicTransPath}!`);
}

processLogo().catch(err => {
  console.error("Error processing logo:", err);
  process.exit(1);
});
