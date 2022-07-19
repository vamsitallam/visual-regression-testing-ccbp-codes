const srcFolder = "./Solutions/";
const fs = require("fs");
const puppeteer = require("puppeteer"); // Require Puppeteer module

const screenShot = async (url, path) => {
  // Define Screenshot function

  const browser = await puppeteer.launch(); // Launch a "browser"

  const page = await browser.newPage(); // Open a new page

  await page.goto(url); // Go to the website

  await page.screenshot({
    // Screenshot the website using defined options

    path: path, // Save the screenshot in current directory

    fullPage: true, // take a fullpage screenshot
  });

  await page.close(); // Close the website

  await browser.close(); // Close the browser
};

// fs.readdir(srcFolder, (err, files) => {
//   files.forEach(async (file) => {
//     const url =
//       "http://localhost:8000/Solutions/" +
//       encodeURIComponent(file) +
//       "/index.html";
//     const path = srcFolder + file + "/screenshot.png";
//     await screenShot(url, path);
//   });
// });
const a = async () => {
  const url =
    "http://localhost:8000/Solutions/" +
    encodeURIComponent("Music Page") +
    "/index.html";

  const path = "./Solutions/Music Page/screenshot-without-ccbp-ui.png";
  await screenShot(url, path);
};

a();
