const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  const log = `${new Date()} | New Request\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    console.log(req.url);
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Data Written ${log}`);
      switch (req.url) {
        case "/about":
          res.end("About Page");
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
