const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fs = require("fs");
const PORT = 8000;

// Connecting to MongoDB CLoud using mongoose
async function connectDB() {
  return await mongoose.connect(
    "mongodb+srv://neelchikhal14:Neel%401994@cluster0.a0c1q8x.mongodb.net/userdb?retryWrites=true&w=majority"
  );
}

connectDB()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Error Occured ", err);
  });

// create scehma
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

//create model

const UserModel = mongoose.model("user", UserSchema);

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
  .get(async (req, res) => {
    const allDbUsers = await UserModel.find({});
    const resHTML = `
    <ul>
        ${allDbUsers.map(
          (user) => `<li>
        ${user.firstName}
        </li>`
        )}
    </ul>
    `;
    return res.status(200).send(resHTML);
  })
  .post(async (req, res) => {
    const { first_name, last_name, gender, job_title, email } = req.body;

    const result = await UserModel.create({
      firstName: first_name,
      lastName: last_name,
      email,
      gender,
      jobTitle: job_title,
    });

    return res.status(201).json({ message: "Success", result });
  });

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);

    return res.json(user);
  })
  .patch((req, res) => {})
  .delete((req, res) => {});

app.listen(PORT, () => {
  console.log("Server connected");
});
