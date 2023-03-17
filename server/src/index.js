import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

const main = async () => {
  const user = await prisma.user.create({
    data: {
      firstName: "Alice",
      lastName: "Smith",
      username: "alice",
      password: "alice123",
      isContractor: false,
      isAdmin: false,
    },
  });

  console.log(user);
};

main();
