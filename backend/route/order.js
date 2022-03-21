import express from "express";
import { requireSignin } from "../common-middleware/user.js";
import { getOrder } from "../controller/order.js";
const router = express.Router();

router.get("/get_list_order", requireSignin, getOrder);

export default router;
