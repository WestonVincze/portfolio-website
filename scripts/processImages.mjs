import sharp from "sharp";
import fs from "fs";
import path from "path";

const SCREENSHOT_HEIGHT = 800;
const SCREENSHOT_WIDTH = 1200;
const SCREENSHOT_QUALITY = 85;

const inputDir = path.join(process.cwd(), "public/images/screenshots/input");
const outputDir = path.join(process.cwd(), "public/images/screenshots");

async function processImages() {
  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|webp|tiff)$/i.test(file),
    );

    if (imageFiles.length === 0) {
      console.log("No images found in input directory");
      return;
    }

    console.log(`Processing ${imageFiles.length} image(s)...`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputFileName = path.parse(file).name + ".webp";
      const outputPath = path.join(outputDir, outputFileName);

      try {
        await sharp(inputPath)
          .resize(SCREENSHOT_WIDTH, SCREENSHOT_HEIGHT, { fit: "cover" })
          .webp({ quality: SCREENSHOT_QUALITY })
          .toFile(outputPath);

        console.log(`✓ ${file} → ${outputFileName}`);
      } catch (error) {
        console.error(`✗ Failed to process ${file}:`, error);
      }
    }

    console.log("Image processing complete!");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

processImages();
