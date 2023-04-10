import express from "express";
import { postLogin } from "../controllers/login.js";

const router = express.Router();

// Endpoints
router.post("/login", postLogin);

export { router as loginRouter };
