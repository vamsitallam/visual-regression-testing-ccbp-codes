var fs = require("fs");
const usersData = require("./csvjson.json");
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

// usersData.forEach(async (user) => {
//   const dir = user.user_id;

//   const subDir = dir + "/" + user.question_short_text;

//   const url =
//     "http://localhost:8000/" + encodeURIComponent(subDir) + "/" + "index.html";

//   const path = subDir + "/screenshot.png";

//   await screenShot(url, path);
// });

a = async () => {
  for (let i = 0; i < 15; i++) {
    const dir = usersData[i].user_id;

    const subDir = dir + "/" + usersData[i].question_short_text;

    const url =
      "http://localhost:8000/" +
      encodeURIComponent(subDir) +
      "/" +
      "index.html";

    const path = subDir + "/screenshot.png";

    await screenShot(url, path);
  }
};

const anshuCodes = usersData.filter(
  (user) => user.user_id === "5e7512b4-5c31-4069-a3b6-eaad5dd77a25"
);

anshuCodes.map(async (user) => {
  const dir = user.user_id;

  const subDir = dir + "/" + user.question_short_text;

  const url =
    "http://localhost:8000/" + encodeURIComponent(subDir) + "/" + "index.html";

  const path = subDir + "/screenshot.png";

  await screenShot(url, path);
});
// a();
