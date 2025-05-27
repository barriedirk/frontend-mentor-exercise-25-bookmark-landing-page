import fs from "fs";
import path from "path";

// 1. Build Tailwind CSS (run Tailwind build)
const tailwindProcess = Bun.spawn({
  cmd: [
    "bunx",
    "@tailwindcss/cli",
    "-i",
    "./src/css/main.css",
    "-o",
    "./dist/css/main.css",
  ],
  stdout: "inherit",
  stderr: "inherit",
});

// Wait for Tailwind process to finish
await tailwindProcess.exited;

// 2. Create dist directory if it doesn't exist
const distDir = "./dist";
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// 3. Copy HTML, Assets, JS, and CSS files to dist/
// Copy HTML with the live-reload script removed
const htmlFile = "./src/index.html";
let htmlContent = fs.readFileSync(htmlFile, "utf-8");

// Remove the live-reload script
// htmlContent = htmlContent.replace(
//   /<script[^>]*>[\s\S]*?<\/script>/g, // Matches any <script> tag and its content
//   ""
// );

// Write the cleaned HTML to dist
fs.writeFileSync(path.join(distDir, "index.html"), htmlContent);

// 4. Copy all assets (images) to dist/assets
const assetsDir = "./src/assets";
const distAssetsDir = "./dist/assets";
if (fs.existsSync(assetsDir)) {
  fs.mkdirSync(distAssetsDir, { recursive: true });
  const assetFiles = fs.readdirSync(assetsDir);
  for (const file of assetFiles) {
    fs.copyFileSync(path.join(assetsDir, file), path.join(distAssetsDir, file));
  }
}

// 5. Copy JS files to dist/js
const jsDir = "./src/js";
const distJsDir = "./dist/js";
if (fs.existsSync(jsDir)) {
  fs.mkdirSync(distJsDir, { recursive: true });
  const jsFiles = fs.readdirSync(jsDir);
  for (const file of jsFiles) {
    fs.copyFileSync(path.join(jsDir, file), path.join(distJsDir, file));
  }
}

console.log("Static files have been built and deployed to the dist/ folder!");
