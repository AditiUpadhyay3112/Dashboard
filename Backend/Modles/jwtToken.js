export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    secure: true,
    httpOnly: true,
    withCredentials: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
