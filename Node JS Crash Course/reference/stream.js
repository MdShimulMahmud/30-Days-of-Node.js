const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");
  myReadStream.pipe(res);
  //   res.end();
});

server.listen(3000);
console.log(`Server is running at port 3000`);
