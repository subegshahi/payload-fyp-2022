import express from "express";
import { prisma } from "../../prisma/prisma-client.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  // console.log("Register endpoint called");

  const { firstName, lastName, username, password, isContractor, isAdmin } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });

  if (user) {
    return res.json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      username,
      password: hashedPassword,
      isContractor,
      isAdmin,
    },
  });

  res.json({ message: "User created" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) {
    return res.json({ message: "User does not exist" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);

  res.json({ token, userID: user.id });
});

export { router as usersRouter };
