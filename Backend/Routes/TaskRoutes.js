import express, { Router } from "express";
import { isAuthorized } from "../Modles/UserAuthenticate.js";
import {
  createAdminTask,
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
router.post("/admin/create", createAdminTask);

export default router;
