import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username: username });

  if (user) {
    return res.json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new userModel({
    username: username,
    password: hashedPassword,
  });

  await newUser.save();

  res.json({ message: "User created" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username: username });

  if (!user) {
    return res.json({ message: "User does not exist" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
  res.json({ token, userID: user._id });
});

export { router as userRouter };
