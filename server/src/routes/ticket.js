import express from "express";
import { postTicket, getTicket, updateTicket, deleteTicketById } from "../controllers/ticket.js";

const router = express.Router();

// Endpoints
router.post("/ticket", postTicket);
router.get("/ticket", getTicket);
router.put("/ticket/:id", updateTicket);
router.delete("/ticket/:id", deleteTicketById);

export { router as ticketRouter };
