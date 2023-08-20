const express = require("express");
const app = express();

const { userRouter } = require("./routes/userRoutes");
const { connectDB } = require("./connection");
const { logRequestResponse } = require("./middlewares");

const PORT = 8000;

// connect mongodb
connectDB()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Error Occured ", err);
  });

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", userRouter);

//create a logging middleware
app.use(logRequestResponse("log.txt"));

app.listen(PORT, () => {
  console.log("Server connected");
});
