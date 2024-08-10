const jwt = require("jsonwebtoken");
const SECRET_KEY = "supersecretkey123";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization token is not provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    console.log(decoded);
    next();
  });
};

module.exports = verifyToken;

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const cookieParser = require('cookie-parser');
// const User = require('../models/User'); // Import your User model

// exports.Login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ useremail: email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid username' });
//     }

//     const isMatch = await bcrypt.compare(password, user.userpassword);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid password' });
//     }

//     const currentuserid = user.id;
//     const token = jwt.sign({ email }, SECRET_KEY);

//     // Set cookies with the currentuserid and token
//     res.cookie('currentuserid', currentuserid, { httpOnly: true });
//     res.cookie('token', token, { httpOnly: true });

//     res.status(200).json({ currentuserid, token });
//   } catch (error) {
//     console.error('Login error:', error.message);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
