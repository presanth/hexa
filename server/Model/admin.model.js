const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Ecart");

const AdminSchema = new mongoose.Schema({
  Adminid: {
    type: Number,
    required: true,
  },
  Adminname: {
    type: String,
    required: true,
  },
  Adminemail: {
    type: String,
    required: true,
  },
  Adminpassword: {
    type: String,
    required: true,
  },
 });

module.exports = mongoose.model("Admin", AdminSchema);
