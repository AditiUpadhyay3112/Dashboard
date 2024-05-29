import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  username: {
    type: String,
    required: [true, "Please Enter Your Email"],
  },

  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [3, "Password must be contain at least 8 characters"],
    maxLength: [30, "Password can't exceed 32 characters"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// HASING THE PASSWORD
// UserSchema.pre("save", async function(next){
//     if(!this.isModified("password")){
//         next()
//     }

//     this.password = await bcrypt.hash(this.password, 10)

// })

// COMPARE PASSWORD
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// JWT GENERATE
UserSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const User = mongoose.model("User", UserSchema);
