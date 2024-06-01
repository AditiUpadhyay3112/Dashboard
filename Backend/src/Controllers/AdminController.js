import { Admin } from "../Modles/AdminModel.js";
import { generateAdminTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Please provide username and password" });
    }

    const admin = await Admin.findOne({ username: username });

    if (!admin) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    if (password !== admin.password) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateAdminTokenAndSetCookie(admin._id, res);

    return res.status(200).json({ message: "Login Successfull", admin });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export const logoutAdmin = async (req, res) => {
  try {
    res.cookie("admin", "", { maxAge: 1 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const getAdmin = async (req, res) => {
  try {
    return res.status(200).json({ data: req.admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};
