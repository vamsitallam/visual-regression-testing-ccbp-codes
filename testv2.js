const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

// const srcFolder = "./Solutions/Articles Page/screenshot.png";

const srcFolder = "./5e7512b4-5c31-4069-a3b6-eaad5dd77a25";
const result = [];

const a = async () => {
  await fs.readdir(srcFolder, (err, files) => {
    files.forEach(async (file) => {
      const expectedPath = `./Solutions/${file}/screenshot.png`;
      const actualPath = `./5e7512b4-5c31-4069-a3b6-eaad5dd77a25/${file}/screenshot.png`;
      getDiff(expectedPath, actualPath);
    });
    console.log(result);
  });
};

a();

async function getDiff(expectedPath, actualPath) {
  const options = {
    output: {
      errorColor: {
        red: 255,
        green: 0,
        blue: 255,
      },
      errorType: "movement",
      transparency: 0.3,
      largeImageThreshold: 1200,
      useCrossOrigin: false,
      outputDiff: true,
    },
    scaleToSameSize: true,
    ignore: "antialiasing",
  };

  const data = await compareImages(
    await fs.readFile(actualPath),
    await fs.readFile(expectedPath),
    options
  );
  console.log("🚀 ~ file: testv2.js ~ line 27 ~ getDiff ~ data", data);
  result.push(data.misMatchPercentage);

  await fs.appendFile(
    "./5e7512b4-5c31-4069-a3b6-eaad5dd77a25/result.md",
    data.misMatchPercentage + "/n"
  );
}
