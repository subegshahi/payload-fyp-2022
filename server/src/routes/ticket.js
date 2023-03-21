import express from "express";
import { prisma } from "../../prisma/prisma-client.js";

const router = express.Router();

router.post("/ticket", async (req, res) => {
  const { airlines, from, to, takeOffTime, landingTime, flightDuration, totalPassengerSeat, fare } =
    req.body;

  const ticket = await prisma.ticket.create({
    data: {
      airlines,
      from,
      to,
      takeOffTime,
      landingTime,
      flightDuration,
      totalPassengerSeat: parseInt(totalPassengerSeat),
      fare: parseInt(fare),
    },
  });

  res.json(ticket);
});

router.get("/ticket", async (req, res) => {
  res.json({ message: "ticket endpoint called" });
});

export { router as ticketRouter };
