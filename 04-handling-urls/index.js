const http = require("http");
const fs = require("fs");
const url = require("url");
const { parse } = require("path");
const myServer = http.createServer((req, res) => {
  const log = `${new Date()} | New Request\n`;
  const theUrl = url.parse(req.url, true);
  fs.appendFile("./log.txt", log, (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Data Written ${log}`);
      switch (theUrl.pathname) {
        case "/about":
          const qpUsername = theUrl.query.username;

          res.end("About Page" + ` user - name - ${qpUsername}`);
          break;
        case "/profile":
          res.end("Profile Page");
          break;
        default:
          res.end("404 Not found");
          break;
      }
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server started");
});
