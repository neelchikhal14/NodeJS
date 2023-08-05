const fs = require("fs");

console.log("Operation Start");
//creating a file - synchronously

fs.writeFileSync("./test.txt", "Hey this file created using NodeJS");

// overwrites the content
fs.writeFileSync("./test.txt", "Hey the contents are now overriden :(");

console.log("Operation finished");

console.log("Operation Start -ASync ");
//creating a file - async

fs.writeFile(
  "./testFileAsync.txt",
  "Hey this file created using NodeJS",
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);

console.log("Operation finished - Async");

// ? Reading a file

const fileContents = fs.readFileSync("./contacts.txt", "utf-8");
console.log(fileContents);

// ? reading file async
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) console.log("Error", err.message);
  else console.log(result);
});

//? Appending file

fs.appendFileSync(
  "./contacts.txt",
  `\nThis is apended content ${new Date().getTime()}`
);
