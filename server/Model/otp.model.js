
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Ecart");

const OtpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, index: { expires: '10m' } } // OTP expires after 10 minutes
});

module.exports = mongoose.model('Otp', OtpSchema);
