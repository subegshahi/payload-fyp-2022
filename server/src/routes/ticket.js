import express from "express";
import { prisma } from "../../prisma/prisma-client.js";

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