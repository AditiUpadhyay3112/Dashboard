import jwt from "jsonwebtoken";
import { catchAsyncError } from "../Modles/catchAsyncError.js";
import ErrorHandler from "../Modles/error.js";
import { User } from "../Modles/UserSchema.js";

export const isAuthorized = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    console.log(token);
    if (!token)
      return res.status(400).json({ message: "Unauthorized request" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const findUser = await User.findById(decoded.userId);

    req.user = findUser;

    next();
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error.message);
  }
};
