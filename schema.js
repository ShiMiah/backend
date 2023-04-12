const mongoose = require('mongoose')

const schema = new mongoose.Schema({
 
  id: {
    type: String,
    required: true,
    minlength: 1
  },
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  phone: {
    type: String,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    minlength: 5
  },
  
})

module.exports = mongoose.model('Person', schema)