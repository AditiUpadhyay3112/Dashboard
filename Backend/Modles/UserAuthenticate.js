import jwt from "jsonwebtoken";
import { catchAsyncError } from "../Modles/catchAsyncError.js";
import ErrorHandler from "../Modles/error.js";
import { User } from "../Modles/UserSchema.js";
export const isAuthorized = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User not authorized", 400));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.User = await User.findById(decoded.id);
  req.user = await User.findById(decoded.id);

  next();
});
