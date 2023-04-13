import { prisma } from "../prisma/prisma-client.js";

// Create booking
export const postBooking = async (req, res) => {
  const {
    airlinesName,
    from,
    to,
    date,
    takeoffTime,
    landingTime,
    seatNumber,
    adultPassengerNumber,
    childPassengerNumber,
    hasPaid,
    paidAmount,
  } = req.body;

  const booking = await prisma.booking.create({
    data: {
      airlinesName,
      from,
      to,
      date,
      takeoffTime,
      landingTime,
      seatNumber,
      adultPassengerNumber: parseInt(adultPassengerNumber),
      childPassengerNumber: parseInt(childPassengerNumber),
      hasPaid,
      paidAmount: parseInt(paidAmount),
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
  const {
    airlinesName,
    from,
    to,
    date,
    takeoffTime,
    landingTime,
    seatNumber,
    adultPassengerNumber,
    childPassengerNumber,
    hasPaid,
    paidAmount,
  } = req.body;

  const updatedBooking = await prisma.booking.update({
    where: {
      id,
    },
    data: {
      airlinesName,
      from,
      to,
      date,
      takeoffTime,
      landingTime,
      seatNumber,
      adultPassengerNumber: parseInt(adultPassengerNumber),
      childPassengerNumber: parseInt(childPassengerNumber),
      hasPaid,
      paidAmount: parseInt(paidAmount),
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

  res.json({ message: "Booking deleted successfully", data: deleteBooking });
};
