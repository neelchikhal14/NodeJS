const express = require("express");

const app = express();
const urlRouter = require("./routes/urlRoutes");
const analyticsRoute = require("./routes/analyticsRoutes");
const { connectDb } = require("./connect");
const PORT = 8000;

// connect to db
connectDb()
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

// middlewares
app.use(express.json());
app.use("/url", urlRouter);
app.use("/analytics", analyticsRoute);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
