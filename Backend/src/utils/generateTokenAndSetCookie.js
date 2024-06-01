import jwt from "jsonwebtoken";

export const generateUserTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("user", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });

  return token;
};

export const generateAdminTokenAndSetCookie = (adminId, res) => {
  const token = jwt.sign({ adminId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("admin", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });

  return token;
};
