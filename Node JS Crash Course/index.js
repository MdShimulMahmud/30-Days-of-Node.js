// const Person = require("./person");
// import Person from "./person";
// const person1 = new Person("shimul mahmud", 22);

// console.log(person1);

const path = require("path");
const fs = require("fs");
const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      if (err) throw err;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
      if (err) throw err;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "Shimul Mahmud",
        age: 22,
        dept: "CSE",
      },
    ];

    res.writeHead(200, { "Content-Type": "Application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
