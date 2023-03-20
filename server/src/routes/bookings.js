import express from "express";
import { prisma } from "../../prisma/prisma-client.js";

const router = express.Router();

router.post("/booking", async (req, res) => {
  const booking = await prisma.booking.findMany();

  res.json(booking);
});

export { router as bookingsRouter };
