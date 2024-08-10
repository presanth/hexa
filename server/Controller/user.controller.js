const express = require("express");
const User = require("../Model/user.model");
const Product = require("../Model/product.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const Otp = require("../Model/otp.model");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const SECRET_KEY = "supersecretkey123";

const transporter = nodemailer.createTransport({
  service: "gmail",
});

exports.Register = async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      addressLine1,
      addressLine2,
      city,
      country,
      state,
      postcode,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ useremail: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = new User({
      userId: uuid.v4().slice(0, 3),
      useremail: email,
      userpassword: hashedPassword,
      userfirstName: firstName,
      userlastName: lastName,
      userphoneNumber: phoneNumber,
      useraddressLine1: addressLine1,
      useraddressLine2: addressLine2,
      city,
      country,
      state,
      postcode,
    });

    // Save user to database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// User Login
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ useremail: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.userpassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const currentuserid = user.userId;
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

    // Set cookies for the token and current user ID
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true,
      sameSite: "Strict",
    });
    res.cookie("currentuserid", currentuserid, {
      httpOnly: true,
      // secure: true,
      sameSite: "Strict",
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Forgot Password Route
exports.forgotpassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ useremail: email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const Email = user.useremail;
  const otp = crypto.randomInt(100000, 999999).toString();

  // Save OTP to the database
  const newOtp = new Otp({ email: Email, otp });
  await newOtp.save();

  const mailOptions = {
    from: "",
    to: Email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: error.toString() });
    }
    res.status(200).json({ message: "OTP sent" });
  });
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const storedOtp = await Otp.findOne({ email: email, otp });

  if (!storedOtp) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  // Remove OTP after verification
  await Otp.deleteOne({ email: email, otp });

  res.status(200).json({ message: "OTP verified" });
};

exports.resetPassword = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ useremail: email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  user.useremail = hashedPassword;
  await user.save();

  res.status(200).json({ message: "Password reset successful" });
};

exports.AddtoCart = async (req, res) => {
  const { currentuserid, productId, quantity } = req.body;

  try {
    const user = await User.findOne({ id: currentuserid });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const product = await Product.findOne({ productId: productId });
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }

    // Check if the product is already in the cart
    const cartItem = user.cart.find((item) => item.productId == productId);

    if (cartItem) {
      // If the product is already in the cart, send a response indicating this
      return res
        .status(200)
        .json({ message: "Product is already in the cart" });
    } else {
      // Add the new product to the cart
      user.cart.push({ productId, quantity, price: product.productPrice });
    }

    await user.save();

    const totalPrice = user.cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    res
      .status(200)
      .json({ message: "Item added to cart", cart: user.cart, totalPrice });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.RemoveCart = async (req, res) => {
  const { currentuserid, productId } = req.body;

  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const user = await User.findOne({ id: currentuserid });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Convert productId to number if it is a string
    // const productIdNumber = parseInt(productId, 10);

    user.cart = user.cart.filter(
      (cartItem) => cartItem.productId !== productId
    );
    await user.save();

    const totalPrice = user.cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    res
      .status(200)
      .json({ message: "Item removed from cart", cart: user.cart, totalPrice });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addQuantity = async (req, res) => {
  const { currentuserid, productId } = req.body;

  try {
    const user = await User.findOne({ id: currentuserid });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const cartItem = user.cart.find((item) => item.productId === productId);
    if (!cartItem) {
      return res.status(400).json({ message: "Product not found in cart" });
    }

    cartItem.quantity += 1;
    await user.save();

    res
      .status(200)
      .json({ message: "Quantity updated successfully", cart: user.cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.removeQuantity = async (req, res) => {
  const { currentuserid, productId } = req.body;

  try {
    const user = await User.findOne({ id: currentuserid });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const cartItem = user.cart.find((item) => item.productId === productId);
    if (!cartItem) {
      return res.status(400).json({ message: "Product not found in cart" });
    }

    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      // Optionally, you can remove the product entirely if quantity is 0
      user.cart = user.cart.filter((item) => item.productId !== productId);
    }
    await user.save();

    res
      .status(200)
      .json({ message: "Quantity updated successfully", cart: user.cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.GetAll = async (req, res) => {
  const userid = req.params.id;
  console.log(userid);
  try {
    const user = await User.findOne({ id: userid });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const totalPrice = user.cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    let cartDetails = [];
    for (let i = 0; i < user.cart.length; i++) {
      const cartItem = user.cart[i];
      const product = await Product.findOne({ productId: cartItem.productId });
      if (product) {
        cartDetails.push({
          productId: cartItem.productId,
          quantity: cartItem.quantity,
          price: cartItem.price,
          productDetails: product,
        });
      }
    }

    res.status(200).json({ cart: cartDetails, totalPrice });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
