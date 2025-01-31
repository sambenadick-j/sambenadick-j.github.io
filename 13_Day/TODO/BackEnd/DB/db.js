const mongoose = require("mongoose");

async function DB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/todo");
  console.log("DB connected");
}

module.exports = DB;
