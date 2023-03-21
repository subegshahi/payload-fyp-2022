import express from "express";
import { prisma } from "../../prisma/prisma-client.js";

const router = express.Router();

router.post("/booking", async (req, res) => {
  const { from, to, departureDate, adultPassengerNumber, childPassengerNumber } = req.body;

  const booking = await prisma.booking.create({
    data: {
      from,
      to,
      departureDate,
      adultPassengerNumber,
      childPassengerNumber,
    },
  });

  res.json(booking);
});

router.get("/booking", async (req, res) => {
  res.json({ message: "booking endpoint called" });
});

export { router as bookingRouter };
