import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const Admin = mongoose.model("Admin", adminSchema);
