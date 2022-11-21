const fs = require("fs");

const path = require("path");

fs.mkdir(path.join(__dirname, "/test"), { recursive: true }, (err) => {
  if (err) throw err;
  console.log("folder created!");

  // file append
  fs.appendFile(
    path.join(__dirname, "/test", "hello.js"),
    `"I love Node js"`,
    (err) => {
      if (err) throw err;
      console.log("File created! ");
    }
  );
});
// write file
fs.writeFile(
  path.join(__dirname, "/test", "hello.js"),
  `"I love Node js"`,
  (err) => {
    if (err) throw err;
    console.log("File created! ");
  }
);
// read file
fs.readFile(path.join(__dirname, "/test", "hello.js"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
