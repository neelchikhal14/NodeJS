const fs = require("fs");
function logRequestResponse(filename) {
  return (req, res, next) => {
    fs.appendFile(
      "log.txt",
      `Date- ${new Date()} | Request Method : ${req.method} | Request path : ${
        req.path
      }\n`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = {
  logRequestResponse,
};
