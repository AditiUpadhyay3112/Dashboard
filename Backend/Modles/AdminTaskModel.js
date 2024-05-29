import mongoose, { Schema } from "mongoose";

const adminTaskSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
});

export const AdminTask = mongoose.model("AdminTask", adminTaskSchema);
