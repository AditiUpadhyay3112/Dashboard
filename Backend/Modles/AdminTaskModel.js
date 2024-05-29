import mongoose, { Schema } from "mongoose";

const adminTaskSchema = new Schema({
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
});

export const AdminTask = mongoose.model("AdminTask", adminTaskSchema);
