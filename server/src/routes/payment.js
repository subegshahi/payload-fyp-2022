import express from "express";
import { postPayment, getPayment } from "../controllers/payment.js";
const router = express.Router();

// Endpoints
router.post("/payment", postPayment);
router.get("/payment", getPayment);

export { router as paymentRouter };
