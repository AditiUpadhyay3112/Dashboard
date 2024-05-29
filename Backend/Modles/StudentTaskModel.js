import mongoose, { Schema } from "mongoose";

const studentTaskSchema = new Schema({
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
  number: {
    type: Number,
  },
});

export const StudentTask = mongoose.model("StudentTask", studentTaskSchema);
