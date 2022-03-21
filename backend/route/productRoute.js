import express from "express";
import { requireSignin } from "../common-middleware/user.js";
import { upload, validateProduct } from "../common-middleware/product.js";
import {
  getFlashSale,
  getAllProductsSeller,
  addProduct,
  getProduct,
  getAllProductsCustomer
} from "../controller/productController.js";
const router = express.Router();

router.get("/flash_sale", requireSignin, getFlashSale);
router.get("/seller/get_all", requireSignin, getAllProductsSeller);
router.post(
  "/seller/add_product",
  requireSignin,
  upload.array("productImages", 12),
  validateProduct,
  addProduct
);
router.get("/get_all_products_customer", requireSignin, getAllProductsCustomer);
router.get("/:id", getProduct);

export default router;
