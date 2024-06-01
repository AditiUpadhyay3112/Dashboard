import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema({
  name: {
    type: String,
  },
  feedback: {
    type: String,
  },
});

export const Feedback = mongoose.model("Feedback", feedbackSchema);
