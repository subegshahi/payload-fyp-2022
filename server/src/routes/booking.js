import express from "express";
import {
  postBooking,
  getBooking,
  getBookingById,
  updateBookingById,
  deleteBookingById,
} from "../controllers/booking.js";

const router = express.Router();

// Endpoints
router.post("/booking", postBooking);
router.get("/booking", getBooking);
router.get("/booking/:id", getBookingById);
router.put("/booking/:id", updateBookingById);
router.delete("/booking/:id", deleteBookingById);

export { router as bookingRouter };
