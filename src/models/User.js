const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  city: String,
  country: String,
  phonenumber: String // Store as a string to handle leading zeros
});

module.exports = mongoose.model('User', userSchema);
