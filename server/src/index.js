import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

// Listening for request
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 4000!");
});
