import express from "express";
import cors from "cors";
import "dotenv/config";
import { prisma } from "./prisma/prisma-client.js";
import { loginRouter } from "./routes/login.js";
import { registerRouter } from "./routes/register.js";
import { bookingRouter } from "./routes/booking.js";
import { ticketRouter } from "./routes/ticket.js";
import { paymentRouter } from "./routes/payment.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api", loginRouter);
app.use("/api", registerRouter);
app.use("/api", bookingRouter);
app.use("/api", ticketRouter);
app.use("/api", paymentRouter);

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
