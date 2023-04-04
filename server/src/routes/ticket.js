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

// Ticket Search
router.post("/search", async (req, res) => {
  const { from, to } = req.body;

  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        from: {
          contains: from,
          mode: "insensitive",
        },
        to: {
          contains: to,
          mode: "insensitive",
        },
      },
    });

    if (tickets.length === 0) {
      return res.status(404).json({ message: "No tickets found" });
    }

    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
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

  // Validate totalPassengerSeat and fare fields.
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
