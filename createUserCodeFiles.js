var fs = require("fs");
const usersData = require("./csvjson.json");

//code to create user directory and files respectively
usersData.forEach((user) => {
  const dir = user.user_id;

  const subDir = dir + "/" + user.question_short_text;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(subDir)) {
    fs.mkdirSync(subDir, { recursive: true });
  }

  const subDirHTML = subDir + "/" + "index.html";
  const html = user.html_code;

  const subDirCSS = subDir + "/" + "index.css";
  const css = user.css_code;

  const subDirJS = subDir + "/" + "index.js";
  const js = user.js_code;

  if (fs.existsSync(subDirHTML)) {
    fs.writeFileSync(subDirHTML, html);
    console.log("html content added to ==>", subDirHTML);
  } else {
    fs.writeFile(subDirHTML, html, function (err) {
      if (err) throw err;
      console.log(subDirHTML, "file is created.");
      console.log("html content added to ==>", subDirHTML);
    });
  }

  if (fs.existsSync(subDirCSS)) {
    fs.writeFileSync(subDirCSS, css);
    console.log("CSS content added to ==>", subDirCSS);
  } else {
    fs.writeFile(subDirCSS, css, function (err) {
      if (err) throw err;
      console.log(subDirCSS, "file is created.");
      console.log("CSS content added to ==>", subDirCSS);
    });
  }

  if (fs.existsSync(subDirJS)) {
    fs.writeFileSync(subDirJS, js);
    console.log("html content added to ==>", subDirJS);
  } else {
    fs.writeFile(subDirJS, html, function (err) {
      if (err) throw err;
      console.log(subDirJS, "file is created.");
      console.log("html content added to ==>", subDirJS);
    });
  }
});
