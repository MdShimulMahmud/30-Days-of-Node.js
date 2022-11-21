const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello Node js Developer");
    res.end();
  })
  .listen(5000, () => console.log("Server is running..."));
