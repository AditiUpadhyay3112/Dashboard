import express from "express";
import {
  Login,
  createUser,
  getUser,
  logout,
} from "../Controllers/UserController.js";
import { isAuthorized } from "../recycle/UserAuthenticate.js";
import protectRoute from "../utils/protectRoute.js";

const router = express.Router();

router.post("/register", createUser);

router.post("/login", Login);

router.post("/logout", protectRoute, logout);

router.get("/currentUser", protectRoute, getUser);

export default router;
