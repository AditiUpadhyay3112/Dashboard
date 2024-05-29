import mongoose, { Schema } from "mongoose";

const masterclassTaskSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  taskId: {
    type: Schema.Types.ObjectId,
    ref: "AdminTask",
  },
  description: {
    type: String,
  },
  registrations: {
    type: Number,
  },
});

export const MasterclassTask = mongoose.model(
  "MasterclassTask",
  masterclassTaskSchema
);
