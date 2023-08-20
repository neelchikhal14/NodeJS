const mongoose = require("mongoose");

// Connecting to MongoDB CLoud using mongoose
async function connectDB() {
  return await mongoose.connect(
    "mongodb+srv://neelchikhal14:Neel%401994@cluster0.a0c1q8x.mongodb.net/userdb?retryWrites=true&w=majority"
  );
}

module.exports = {
  connectDB,
};
