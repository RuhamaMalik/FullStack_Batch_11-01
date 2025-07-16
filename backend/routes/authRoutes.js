import {Router} from "express";
import { login, profile, signUp } from "../controllers/authController.js";
import { middlewareToProtect } from "../middlewares/authMidleware.js";


const router = Router();

router.post("/signup", signUp);
router.post("/signin", login);
router.get("/profile", middlewareToProtect , profile);

export default router;