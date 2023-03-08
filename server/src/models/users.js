import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // firstname: { type: String },
  // lastname: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const userModel = mongoose.model("user", userSchema);
