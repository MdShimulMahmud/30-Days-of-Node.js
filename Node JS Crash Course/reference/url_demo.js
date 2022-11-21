const url = require("url");

const myUrl = new URL(
  "http://www.mywebsite.com:8000/index.html?id=100&status=active"
);

console.log(myUrl);

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
