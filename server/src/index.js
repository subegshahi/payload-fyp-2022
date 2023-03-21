import express from "express";
import "dotenv/config";
import cors from "cors";
import { prisma } from "../prisma/prisma-client.js";
import { userRouter } from "./routes/user.js";
import { bookingRouter } from "./routes/booking.js";
import { ticketRouter } from "./routes/ticket.js";
import { paymentRouter } from "./routes/payment.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/user", bookingRouter);
app.use("/contractor", ticketRouter);
app.use("/payment", paymentRouter);

// Prisma main function for testing db
const main = async () => {
  const booking = await prisma.booking.findMany();

  console.log({ booking });
};

// main();

// Listening for request
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 4000!");
});
