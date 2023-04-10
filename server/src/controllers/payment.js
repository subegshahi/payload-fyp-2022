import { prisma } from "../prisma/prisma-client.js";

export const postPayment = async (req, res) => {
  res.json({ message: "payment endpoint called" });
};

export const getPayment = async (req, res) => {
  res.json({ message: "payment endpoint called" });
};
