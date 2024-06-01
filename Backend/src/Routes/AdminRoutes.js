import { Router } from "express";
import {
  getAdmin,
  loginAdmin,
  logoutAdmin,
} from "../Controllers/AdminController.js";
import { adminProtectRoute } from "../utils/protectRoute.js";

const router = Router();

router.post("/login", loginAdmin);

router.post("/logout", adminProtectRoute, logoutAdmin);

router.get("/currentAdmin", adminProtectRoute, getAdmin);

export default router;
