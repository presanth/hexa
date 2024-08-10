const Product = require("../Model/product.model");
const uuid = require("uuid");
const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Model/admin.model");
const upload = require("../Middleware/Multer");
const SECRET_KEY = "supersecretkey123";

const Login = async (req, res) => {
  try {
    const { Adminemail, Adminpassword } = req.body;

    const user = await User.findOne({ Adminemail });
    if (!user) {
      return res.status(400).json({ message: "Invalid username" });
    }

    const isMatch = await bcrypt.compare(Adminpassword, user.Adminpassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const currentuserid = user.Adminid;
    const token = jwt.sign({ Adminemail }, SECRET_KEY, { expiresIn: "1h" });

    // Set cookies for the token and current user ID
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.cookie("currentuserid", currentuserid, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error in Login:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const signup = async (req, res) => {
  try {
    const { Adminid, Adminname, Adminemail, Adminpassword, confirmpassword } =
      req.body;
    console.log(Adminname, Adminemail, confirmpassword, Adminpassword, Adminid);

    // Check if password and confirm password match
    if (Adminpassword !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if all required fields are provided
    if (!Adminid || !Adminname || !Adminemail || !Adminpassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the admin already exists
    const AdminExists = await User.findOne({ Adminemail });
    if (AdminExists) {
      return res.status(400).json({ message: "This Admin already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(Adminpassword, 10);

    // Create a new user
    const newUser = new User({
      Adminid,
      Adminname,
      Adminemail,
      Adminpassword: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const addProduct = async (req, res) => {
  const { productName, productPrice, productDetails, productCategory } =
    req.body;

  try {
    const newProductId = uuid.v4().slice(0, 3);
    const newProduct = new Product({
      productId: newProductId,
      productName,
      productPrice,
      productDetails,
      productCategory,
      productImage: req.file ? req.file.path : null,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.id;
  console.log(productId);

  const product = await Product.findOne({ productId });
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  signup,
  Login,
};
