import express from "express";
import "dotenv/config";
import cors from "cors";
import { usersRouter } from "./routes/users.js";
import { bookingsRouter } from "./routes/bookings.js";
import { prisma } from "../prisma/prisma-client.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/auth", usersRouter);
app.use("/user", bookingsRouter);

// Prisma main function for testing db
const main = async () => {
  const booking = await prisma.booking.findMany();
  console.log({ booking });
};

main();

// Listening for request
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 4000!");
});
