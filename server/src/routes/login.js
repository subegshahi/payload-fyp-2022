import express from "express";
import { prisma } from "../../prisma/prisma-client.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);

  if (user.isContractor) {
    res.json({ accessToken: token, userID: user.id, isContractor: true });
  } else if (user.isAdmin) {
    res.json({ accessToken: token, userID: user.id, isAdmin: true });
  } else {
    res.json({ accessToken: token, userID: user.id });
  }
});

export { router as loginRouter };
