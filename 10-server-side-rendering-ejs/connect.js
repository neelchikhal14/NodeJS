const mongoose = require("mongoose");

async function connectDb() {
  return mongoose.connect(
    "mongodb+srv://neelchikhal14:Neel%401994@cluster0.a0c1q8x.mongodb.net/url-shortner?retryWrites=true&w=majority"
  );
}

module.exports = {
  connectDb,
};
