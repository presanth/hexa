const express = require('express');
const router = express.Router();
const adminController = require('../Controller/admin.controller'); // Ensure this path is correct
const userController = require('../Controller/user.controller'); // Ensure this path is correct
const upload = require('../Middleware/product.multer');




// admin
router.post('/Addproduct', upload.single('productImage'), adminController.addProduct);
router.get('/Getproducts', adminController.getAllProducts);
router.post('/Signup', adminController.signup)
router.post('/Login', adminController.Login)

// user
router.post('/register', userController.Register)
router.post('/userLogin', userController.userLogin)
router.post('/forgotpass', userController.forgotpassword)
router.post('/verifyotp', userController.verifyOtp)



module.exports = router;
