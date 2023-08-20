const { UserModel } = require("../models/UserModel");
async function getAllUsers(req, res) {
  const allDbUsers = await UserModel.find({});

  return res.status(200).json(allDbUsers);
}

async function getUserById(req, res) {
  const userId = req.params.id;
  const user = await UserModel.findById(userId);

  return res.json(user);
}

async function createUser(req, res) {
  const { first_name, last_name, gender, job_title, email } = req.body;

  const result = await UserModel.create({
    firstName: first_name,
    lastName: last_name,
    email,
    gender,
    jobTitle: job_title,
  });

  return res.status(201).json({ message: "Success", result });
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
