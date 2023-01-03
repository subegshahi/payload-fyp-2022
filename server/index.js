const express = require("express");
require("dotenv").config(); // Load environment variables from .env file (if present

const app = express();

// Listen for requests
app.listen(process.env.PORTS, () => {
  console.log("Server is running on port 4000!");
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
