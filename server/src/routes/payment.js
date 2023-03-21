import express from "express";
import { prisma } from "../../prisma/prisma-client.js";

const router = express.Router();

router.post("/", async (req, res) => {
  res.json({ message: "payment endpoint called" });
});

router.get("/", async (req, res) => {
  res.json({ message: "payment endpoint called" });
});

export { router as paymentRouter };
