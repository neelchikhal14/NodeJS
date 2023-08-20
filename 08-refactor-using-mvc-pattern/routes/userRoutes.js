const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../controllers/userController");
console.log("I executed");
router.route("/").get(getAllUsers).post(createUser);

router
  .route("/:id")
  .get(getUserById)
  .patch((req, res) => {})
  .delete((req, res) => {});

module.exports = {
  userRouter: router,
};
