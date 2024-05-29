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
  organisation: {
    type: String,
  },
});

export const WorkshopTask = mongoose.model("WorkshopTask", workshopTaskSchema);
