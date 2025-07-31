import express from "express";
import { authorize, middlewareToProtect } from "../middlewares/authMidleware.js";
import { 
    createCategory, 
    deleteCategory,
    getAllCategories,
    updateCategory, 
    updateCategoryStatus } from "../controllers/categoryController.js";

    
import  {upload} from "../config/multerConfig.js";

const router = express.Router();

router.post("/", middlewareToProtect, authorize("admin"), upload.single("image"), createCategory);

router.delete("/:id", middlewareToProtect, authorize("admin"), deleteCategory);

router.put("/:id",middlewareToProtect, authorize("admin"),  upload.single("image"), updateCategory);

router.patch("/:id",middlewareToProtect, authorize("admin"),  updateCategoryStatus);

router.get("/", getAllCategories);


export default router;