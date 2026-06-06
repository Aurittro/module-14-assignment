const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// 1. Root Route
app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

// 2. Simple String Response
app.get("/welcome", (req, res) => {
  res.send("Welcome to Express Learning");
});

// 2. JSON Response
app.get("/student", (req, res) => {
  res.json({
    name: "John",
    course: "MERN Stack",
    batch: 13
  });
});

// 3. GET Request With URL Query
app.get("/search", (req, res) => {
  res.json(req.query);
});

// 4. Simple POST Request
app.post("/register", (req, res) => {
  res.json({
    message: "Registration Successful",
    data: req.body
  });
});

// 4. POST Request With URL Query
app.post("/product", (req, res) => {
  res.json({
    productId: req.query.id
  });
});

// 4. POST Request With Header Properties
app.post("/login", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  res.json({
    username,
    password
  });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});GET http://localhost:5000/welcome
