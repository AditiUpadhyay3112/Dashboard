import express from "express";
import {
  Login,
  Logout,
  createUser,
  getUser,
} from "../Controllers/UserController.js";
import { isAuthorized } from "../Modles/UserAuthenticate.js";

const router = express.Router();

router.post("/register", createUser);

router.post("/login", Login);

router.post("/logout", isAuthorized, Logout);

router.get("/currentUser", isAuthorized, getUser);

export default router;
