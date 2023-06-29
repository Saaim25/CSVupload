const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MongoUrl);

const db = mongoose.connection;

db.once("open", function () {
  console.log("database connected to the server successfully!");
});

module.exports = db;
