const http = require("http");
const fs = require("fs");

let server = http.createServer(function (req, res) {
  const reqUrl = req.url;
  switch (reqUrl) {
    case "/":
      fs.readFile("index.html", (err, data) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
      break;
    case "/index.js":
      fs.readFile("index.js", (err, data) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200, { "Content-Type": "application/javascript" });
          res.write(data);
          res.end();
        }
      });
      break;
    case "/index.css":
      fs.readFile("index.css", (err, data) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.write(data);
          res.end();
        }
      });
  }
});

server.listen(3000);
