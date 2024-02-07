const mongoose=require('mongoose');
require("dotenv").config();
//connection
const MONGO_URL = process.env.MONGO_URL;
const connection = mongoose.connect(`${MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { connection };