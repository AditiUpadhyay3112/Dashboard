import { User } from "../Modles/UserModel.js";
import { generateUserTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const createUser = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const findUser = await User.findOne({ username });

    if (findUser)
      return res
        .status(400)
        .json({ error: "User with the username already exists" });

    const user = await User.create({
      name,
      username,
      password,
    });

    return res.status(200).json({ message: "User created successfully", user });
  } catch (error) {}
};

// LOGIN
export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Please provide username and password" });
    }

    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateUserTokenAndSetCookie(user._id, res);

    return res.status(200).json({ message: "Login Successfull", user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// LOGED OUT USER
export const logout = async (req, res) => {
  try {
    res.cookie("user", "", { maxAge: 1 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    return res.status(200).json({ success: true, data: req.user });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};
