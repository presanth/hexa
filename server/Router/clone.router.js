const express = require('express');
const router = express.Router();
const cloneController = require('../Controller/clone.controller')
const categoryControlller = require('../Controller/category.controller')


router.get("/findData/:cid",cloneController.findData);
router.post("/signUP",cloneController.signUp);


// category
router.get("/getCategory", categoryControlller.getCategory)



module.exports=router