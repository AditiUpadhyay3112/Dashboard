import mongoose, { Schema } from "mongoose";

const socialTaskSchema = new Schema({
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
  shares: {
    type: Number,
  },
  followers: {
    type: Number,
  },
});

export const SocialTask = mongoose.model("SocialTask", socialTaskSchema);
