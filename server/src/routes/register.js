import express from "express";
import { postRegister } from "../controllers/register.js";

const router = express.Router();

// Endpoint
router.post("/register", postRegister);

export { router as registerRouter };
