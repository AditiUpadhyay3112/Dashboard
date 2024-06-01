import express from "express";
import {
  Login,
  createUser,
  getUser,
  logout,
} from "../Controllers/UserController.js";
import { userProtectRoute } from "../utils/protectRoute.js";

const router = express.Router();

router.post("/register", createUser);

router.post("/login", Login);

router.post("/logout", userProtectRoute, logout);

router.get("/currentUser", userProtectRoute, getUser);

export default router;
