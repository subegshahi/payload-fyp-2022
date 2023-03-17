import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

mongoose.connect(process.env.DB_CONNECTION);

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 4000!");
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
