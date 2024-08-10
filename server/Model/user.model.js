// models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  userpassword: {
    type: String,
    required: true,
  },
  userfirstName: {
    type: String,
    required: true,
  },
  userlastName: {
    type: String,
    required: true,
  },
  userphoneNumber: {
    type: Number,
    required: true,
  },
  useraddressLine1: {
    type: String,
    required: true,
  },
  useraddressLine2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
