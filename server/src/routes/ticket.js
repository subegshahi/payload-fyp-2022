import express from "express";
import { prisma } from "../../prisma/prisma-client.js";

const router = express.Router();

router.post("/ticket", async (req, res) => {
  res.json({ message: "ticket endpoint called" });
});

router.get("/ticket", async (req, res) => {
  res.json({ message: "ticket endpoint called" });
});

export { router as ticketRouter };
