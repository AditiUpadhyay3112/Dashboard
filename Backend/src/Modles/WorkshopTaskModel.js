import mongoose, { Schema } from "mongoose";

const workshopTaskSchema = new Schema({
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
  organization: {
    type: String,
  },
  studentName: {
    type: String,
  },
});

export const WorkshopTask = mongoose.model("WorkshopTask", workshopTaskSchema);
