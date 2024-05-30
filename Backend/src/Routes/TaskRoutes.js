import express, { Router } from "express";
import { isAuthorized } from "../recycle/UserAuthenticate.js";
import {
  createAdminTask,
  getAdminTask,
  getMasterclassTasks,
  getSocialTasks,
  getStudentTasks,
  getWorkshopTasks,
  submitMasterclassTask,
  submitSocialTask,
  submitStudentTask,
  submitWorkshopTask,
} from "../Controllers/TaskController.js";

const router = Router();

router.use(isAuthorized);

router.post("/student", submitStudentTask);
router.post("/social", submitSocialTask);
router.post("/masterclass", submitMasterclassTask);
router.post("/workshop", submitWorkshopTask);
router.post("/admin", createAdminTask);
router.get("/admin", getAdminTask);
router.get("/student", getStudentTasks);
router.get("/social", getSocialTasks);
router.get("/workshop", getWorkshopTasks);
router.get("/masterclass", getMasterclassTasks);

export default router;
