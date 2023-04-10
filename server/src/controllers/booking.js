import { prisma } from "../prisma/prisma-client.js";

// Create booking
export const postBooking = async (req, res) => {
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
};

// Read all bookings
export const getBooking = async (req, res) => {
  const bookings = await prisma.booking.findMany();
  res.json(bookings);
};

// Read single booking by id
export const getBookingById = async (req, res) => {
  const { id } = req.params;
  const booking = await prisma.booking.findUnique({
    where: {
      id,
    },
  });

  res.json(booking);
};

// Search bookings
export const getBookingForSearch = async (req, res) => {
  res.json({ message: "Search bookings" });
};

// Update single booking by id
export const updateBookingById = async (req, res) => {
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
};

// Delete single booking by id
export const deleteBookingById = async (req, res) => {
  const { id } = req.params;
  const { id: bookingId } = req.body;

  if (id !== bookingId) {
    return res.status(400).json({ error: "ID in URL and request body do not match" });
  }

  const deleteBooking = await prisma.booking.delete({
    where: {
      id,
    },
  });

  res.json({ message: "booking deleted successfully", data: deleteBooking });
};
