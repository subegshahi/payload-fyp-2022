import { prisma } from "../prisma/prisma-client.js";

// Upload ticket
export const postTicket = async (req, res) => {
  const { airlinesName, from, to, takeoffTime, landingTime, date, totalPassengerSeat, fare } =
    req.body;

  const ticket = await prisma.ticket.create({
    data: {
      airlinesName,
      from,
      to,
      takeoffTime,
      landingTime,
      date,
      totalPassengerSeat: parseInt(totalPassengerSeat),
      fare: parseInt(fare),
    },
  });

  res.json(ticket);
};

// Get all tickets
export const getTicket = async (req, res) => {
  const tickets = await prisma.ticket.findMany();

  res.json(tickets);
};

// Update ticket
export const updateTicket = async (req, res) => {
  const { id } = req.params;
  const { airlinesName, from, to, takeoffTime, landingTime, date, totalPassengerSeat, fare } =
    req.body;

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
      date,
      totalPassengerSeat: parseInt(totalPassengerSeat),
      fare: parseInt(fare),
    },
  });

  res.json(updatedTicket);
};

// Delete ticket
export const deleteTicketById = async (req, res) => {
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
};
