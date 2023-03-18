import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routes/users.js";
import { prisma } from "../prisma/prisma-client.js";

const app = express();

// Middlewears
app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

// Prisma main function for testing db
const main = async () => {
  const user = await prisma.user.findMany();
  const contractor = await prisma.contractor.findMany();

  console.log({ contractor });
};

main();

// Listening for request
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 4000!");
});
