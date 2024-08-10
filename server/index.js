const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// const cookieParser = require("cookie-parser");

// Middleware to parse cookies
// app.use(cookieParser());
const cloneRouter = require("./Router/clone.router");

app.use(cors({ orgin: "http://localhost:5173" }));
app.use(express.json());
// app.use(
//   "/uploads/products",
//   express.static(path.join(__dirname, "uploads/products"))
// );
app.use("/clone", cloneRouter);

app.listen(8000, () => {
  console.log("server running...");
});
