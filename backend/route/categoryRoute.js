import express from "express";
import { upload } from "../common-middleware/category.js";
const router = express.Router();
import { getCategory, createCategory } from "../controller/categoryController.js";
import { requireSignin } from '../common-middleware/user.js';

router.post("/create_category", upload.single("imgCategory"), createCategory);
router.get("/get_category", requireSignin, getCategory);

export default router;
