import { Router } from "express";
import { userProtectRoute } from "../utils/protectRoute.js";
import {
  getFeedback,
  submitFeedback,
} from "../Controllers/FeedbackController.js";

const router = Router();

router.post("/create", userProtectRoute, submitFeedback);
router.get("/", userProtectRoute, getFeedback);

export default router;
