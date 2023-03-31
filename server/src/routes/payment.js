import express from "express";
import { prisma } from "../prisma/prisma-client.js";

const router = express.Router();

router.post("/payment", async (req, res) => {
  res.json({ message: "payment endpoint called" });
});

router.get("/payment", async (req, res) => {
  res.json({ message: "payment endpoint called" });
});

export { router as paymentRouter };
