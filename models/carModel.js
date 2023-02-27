const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const carSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  view_count: { 
    type: String,
  },
  discount: {
    type: String,
  },
  brand: {
    type: String,
    required: true,
  },
  seats: {
    type: String
  },
  seats: {
    type: Number
  },
  release_date: {
    type: String
  },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

})



module.exports = mongoose.model('Car', carSchema)