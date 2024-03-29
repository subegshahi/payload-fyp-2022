import { prisma } from "../prisma/prisma-client.js";
import bcrypt from "bcrypt";

export const postRegister = async (req, res) => {
  const { firstName, lastName, username, password, isContractor, isAdmin } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });

  if (user) {
    return res.json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      firstName,
      lastName,
      username,
      password: hashedPassword,
      isContractor,
      isAdmin,
      isRegistered: true,
    },
  });

  res.json({ message: "User created" });
};
