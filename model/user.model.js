const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  userName : String,
  password : String,
  age      : String,
  id       : String
});

const User = mongoose.model('User', Schema)

module.exports = {
  User
}