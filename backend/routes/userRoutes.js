import {Router} from "express";
import { authorize, middlewareToProtect } from "../middlewares/authMidleware.js";
import { deleteUser, getAllUsers, updateUser } from "../controllers/usersController.js";


const router = Router();

router.get("/all", middlewareToProtect, authorize("admin") , getAllUsers);


router.put("/:id", middlewareToProtect, updateUser);

router.delete("/:id", middlewareToProtect, deleteUser);

export default router;