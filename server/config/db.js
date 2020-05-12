const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("mongoDB Connected: " + (await conn).connection.host);
  } catch (error) {
    console.log("Problem connecting to server: ", error.message);
  }
};

module.exports = connectDB;
