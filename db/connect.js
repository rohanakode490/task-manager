const mongoose = require("mongoose");
console.log(mongoose.version);

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB