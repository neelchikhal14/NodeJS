const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const PORT = 8000;

// Middlewares
app.use(express.urlencoded({ extended: false }));

//create a logging middleware
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `Date- ${new Date()} | Request Method : ${req.method} | Request path : ${
      req.path
    }\n`,
    (err, data) => {
      next();
    }
  );
});

app.get("/users", (req, res) => {
  const html = `
   <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
   </ul> 
    `;
  return res.send(html);
});

app
  .route("/api/users")
  .get((req, res) => {
    return res.json(users);
  })
  .post((req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) return res.status(400).json({ message: "Error" });

      return res.json({ status: "success", id: users.length });
    });
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const userId = Number(req.params.id);
    const user = users.find((user) => user.id === userId);

    return res.json(user);
  })
  .patch((req, res) => {})
  .delete((req, res) => {});

app.listen(PORT, () => {
  console.log("Server connected");
});
