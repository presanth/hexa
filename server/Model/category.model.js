const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/clone")

const   categoryData = new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    categoryname:{
        type:String,
        required:true
    },
    categoryid:{
        type:String,
        required:true
    },
    categoryimage:{
        type:String,
        required:true,
    }

})

module.exports = new mongoose.model("category",categoryData)