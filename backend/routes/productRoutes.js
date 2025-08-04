import express from "express";
import { createProduct, deleteProduct, getAllProducts, updateProductStatus } from "../controllers/productController.js";
import { authorize, middlewareToProtect } from "../middlewares/authMidleware.js";
import { upload } from "../config/multerConfig.js";
import { deleteCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", middlewareToProtect, authorize("admin"),  upload.array("images", 5), createProduct); 

router.patch("/:id",middlewareToProtect, authorize("admin"),  updateProductStatus);

router.delete("/:id", middlewareToProtect, authorize("admin"), deleteProduct);

router.get("/", getAllProducts);


export default router;
