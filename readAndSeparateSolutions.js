const srcFolder = "./OutputJSONs/";
const fs = require("fs");

fs.readdir(srcFolder, (err, files) => {
  files.forEach((file) => {
    const fileImport = "./OutputJSONs/" + file;
    const content = require(fileImport);
    const folderName = "./Solutions/" + content[0].question.short_text;
    //create folder
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName, { recursive: true });
    }

    const htmlContent = content[0].solutions[0].code_details[0].code_content;
    const htmlFilePath = folderName + "/" + "index.html";
    //create HTML
    if (fs.existsSync(htmlFilePath)) {
      fs.writeFileSync(htmlFilePath, htmlContent);
      console.log("html content added to ==>", htmlFilePath);
    } else {
      fs.writeFile(htmlFilePath, htmlContent, function (err) {
        if (err) throw err;
        console.log(htmlFilePath, "file is created.");
        console.log("html content added to ==>", htmlFilePath);
      });
    }

    const cssContent = content[0].solutions[0].code_details[1].code_content;
    const cssFilePath = folderName + "/" + "index.css";
    //create CSS

    if (fs.existsSync(cssFilePath)) {
      fs.writeFileSync(cssFilePath, cssContent);
      console.log("html content added to ==>", cssFilePath);
    } else {
      fs.writeFile(cssFilePath, cssContent, function (err) {
        if (err) throw err;
        console.log(cssFilePath, "file is created.");
        console.log("html content added to ==>", cssFilePath);
      });
    }

    const jsContent = content[0].solutions[0].code_details[2].code_content;
    const jsFilePath = folderName + "/" + "index.js";
    //create JS
    if (fs.existsSync(jsFilePath)) {
      fs.writeFileSync(jsFilePath, jsContent);
      console.log("html content added to ==>", jsFilePath);
    } else {
      fs.writeFile(jsFilePath, jsContent, function (err) {
        if (err) throw err;
        console.log(jsFilePath, "file is created.");
        console.log("html content added to ==>", jsFilePath);
      });
    }
  });
});
