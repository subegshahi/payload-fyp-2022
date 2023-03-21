import express from "express";
import { prisma } from "../../prisma/prisma-client.js";

const router = express.Router();

router.post("/booking", async (req, res) => {
  res.json({ message: "booking endpoint called" });
});

router.get("/booking", async (req, res) => {
  res.json({ message: "booking endpoint called" });
});

export { router as bookingRouter };
