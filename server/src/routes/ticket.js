import express from "express";
import { prisma } from "../prisma/prisma-client.js";

const router = express.Router();

// Upload ticket
router.post("/ticket", async (req, res) => {
  const {
    airlinesName,
    from,
    to,
    takeoffTime,
    landingTime,
    flightDuration,
    totalPassengerSeat,
    fare,
  } = req.body;

  const ticket = await prisma.ticket.create({
    data: {
      airlinesName,
      from,
      to,
      takeoffTime,
      landingTime,
      flightDuration,
      totalPassengerSeat: parseInt(totalPassengerSeat),
      fare: parseInt(fare),
    },
  });

  res.json(ticket);
});

// Search tickets
router.post("/search", async (req, res) => {
  const { from, to, departureDate, adultPassengerNumber, childPassengerNumber } = req.body;

  // Find tickets matching search criteria
  const tickets = await prisma.ticket.findMany({
    where: {
      from: {
        equals: from,
      },
      to: {
        equals: to,
      },
      takeoffTime: {
        gte: new Date(departureDate),
      },
      totalPassengerSeat: {
        gte: parseInt(adultPassengerNumber) + parseInt(childPassengerNumber),
      },
      isContractor: {
        isNotNull: true,
      },
    },
    select: {
      id: true,
      airlinesName: true,
      from: true,
      to: true,
      takeoffTime: true,
      landingTime: true,
      flightDuration: true,
      totalPassengerSeat: true,
      fare: true,
      isContractor: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  res.json(tickets);
});

// Get all tickets
router.get("/ticket", async (req, res) => {
  const tickets = await prisma.ticket.findMany();

  res.json(tickets);
});

// Edit ticket
router.put("/ticket/:id", async (req, res) => {
  const { id } = req.params;
  const {
    airlinesName,
    from,
    to,
    takeoffTime,
    landingTime,
    flightDuration,
    totalPassengerSeat,
    fare,
  } = req.body;

  // Validate totalPassengerSeat and fare fields
  if (isNaN(parseInt(totalPassengerSeat)) || isNaN(parseInt(fare))) {
    return res.status(400).json({ error: "totalPassengerSeat and fare must be numbers" });
  }

  const updatedTicket = await prisma.ticket.update({
    where: {
      id,
    },
    data: {
      airlinesName,
      from,
      to,
      takeoffTime,
      landingTime,
      flightDuration,
      totalPassengerSeat: parseInt(totalPassengerSeat),
      fare: parseInt(fare),
    },
  });

  res.json(updatedTicket);
});

// Delete ticket
router.delete("/ticket/:id", async (req, res) => {
  const { id } = req.params;
  const { id: ticketId } = req.body;

  if (id !== ticketId) {
    return res.status(400).json({ error: "ID in URL and request body do not match" });
  }

  const deleteTicket = await prisma.ticket.delete({
    where: {
      id,
    },
  });

  res.json({ message: "ticket deleted successfully", data: deleteTicket });
});

export { router as ticketRouter };
