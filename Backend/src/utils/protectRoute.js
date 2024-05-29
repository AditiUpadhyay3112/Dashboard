import jwt from "jsonwebtoken";
import { User } from "../Modles/UserModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log(token);

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

export default protectRoute;
