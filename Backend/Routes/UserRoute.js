import express from "express";
import { Login, Logout, getUser} from "../Controllers/UserController.js";
import { isAuthorized } from "../Modles/UserAuthenticate.js";

const router = express.Router();


router.post("/login", Login);

router.post("/logout", isAuthorized , Logout)

router.get("/currentUser", isAuthorized, getUser);

export default router;