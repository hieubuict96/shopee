import express from "express";
const router = express.Router();
import { requireSignin } from "../common-middleware/user.js";
import { addToCart, getCart, reduceQtt, increaseQtt, deleteProduct, addToOrder } from "../controller/cart.js";

router.post("/add_to_cart", requireSignin, addToCart);
router.get("/get_cart", requireSignin, getCart);
router.put("/reduce_qtt", requireSignin, reduceQtt);
router.put("/increase_qtt", requireSignin, increaseQtt);
router.delete("/delete_product", requireSignin, deleteProduct);
router.put("/add_to_order", requireSignin, addToOrder);

export default router;
