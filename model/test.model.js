const mongoose = require('mongoose')

const schema = new mongoose.Schema({ name: String }, {
    
  });
  const Test = mongoose.model('Test', schema);

  module.exports = {
    Test
  }