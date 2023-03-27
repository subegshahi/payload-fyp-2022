import express from "express";
import { prisma } from "../../prisma/prisma-client.js";

const router = express.Router();

// Create booking
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

// Read all bookings
router.get("/booking", async (req, res) => {
  const bookings = await prisma.booking.findMany();
  res.json(bookings);
});

// Read single booking by id
router.get("/booking/:id", async (req, res) => {
  const { id } = req.params;
  const booking = await prisma.booking.findUnique({
    where: {
      id,
    },
  });

  res.json(booking);
});

// Update single booking by id
router.put("/booking/:id", async (req, res) => {
  const { id } = req.params;
  const { from, to, departureDate, adultPassengerNumber, childPassengerNumber } = req.body;

  const updatedBooking = await prisma.booking.update({
    where: {
      id,
    },
    data: {
      from,
      to,
      departureDate,
      adultPassengerNumber,
      childPassengerNumber,
    },
  });

  res.json(updatedBooking);
});

// Delete single booking by id
router.delete("/booking/:id", async (req, res) => {
  const { id } = req.params;
  const { id: bookingId } = req.body;

  if (id !== bookingId) {
    return res.status(400).json({ error: "ID in URL and request body do not match" });
  }

  const deletedBooking = await prisma.booking.delete({
    where: {
      id,
    },
  });

  res.json({ message: "Booking deleted successfully", data: deletedBooking });
});

export { router as bookingRouter };
