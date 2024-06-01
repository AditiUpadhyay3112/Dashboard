import jwt from "jsonwebtoken";
import { User } from "../Modles/UserModel.js";
import { Admin } from "../Modles/AdminModel.js";

export const userProtectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.user;

    if (!token)
      return res.status(400).json({ message: "Unauthorized request" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const findUser = await User.findById(decoded.userId).select("-password");

    req.user = findUser;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};

export const adminProtectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.admin;

    if (!token)
      return res.status(400).json({ message: "Unauthorized request" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const findAdmin = await Admin.findById(decoded.adminId).select("-password");

    req.admin = findAdmin;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};
