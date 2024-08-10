const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/clone")

const tempData = new mongoose.Schema({
    id:{
        type: String,
        required:true,
    },
    uniqueID:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    Address:{
        type: String,
        required:true,
    },
    mobilenumber:{
        type: String,
        required:true,
    },
    rating:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
});

module.exports = new mongoose.model("hoteldatas" , tempData)