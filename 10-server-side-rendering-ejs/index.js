const express = require("express");

const app = express();
const path = require("path");
const urlRouter = require("./routes/urlRoutes");
const analyticsRoute = require("./routes/analyticsRoutes");
const staticRouter = require("./routes/staticRouter");
const urlModel = require("./models/urlModel");
const { connectDb } = require("./connect");
const PORT = 8000;

// connect to db
connectDb()
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

// integrate ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middlewares
app.use(express.json());
// middleware to parse form data
app.use(express.urlencoded({ extended: false }));
//custom router middleware
app.use("/url", urlRouter);
app.use("/analytics", analyticsRoute);
app.use("/", staticRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
