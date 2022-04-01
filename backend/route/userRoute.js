import express from "express";
const router = express.Router();
import {
  validatePhoneNumber,
  validateInfo,
  upload,
  validateUpdate,
  requireSignin,
  validateEmail,
} from "../common-middleware/user.js";
import {
  sendPhoneNumber,
  sendCode,
  resendCode,
  signup,
  signin,
  signinWithGoogle,
  signinWithFacebook,
  getData,
  updateController,
  sendCodeToEmail,
  verifyCodeUpdateEmail,
} from "../controller/userController.js";

import { insertCart } from "../controller/insert.js";

router.post("/signup/send_phone_number", validatePhoneNumber, sendPhoneNumber);
router.post("/signup/send_code", sendCode);
router.post("/signup/resend_code", resendCode);
router.post("/signup", validateInfo, signup);
router.post("/signin", signin);
router.post("/signin_with_google", signinWithGoogle);
router.post("/signin_with_facebook", signinWithFacebook);
router.get("/get_data", getData);
router.post(
  "/profile/update",
  requireSignin,
  upload.fields([{ name: "imgBuyer" }, { name: "imgShop" }]),
  validateUpdate,
  updateController
);
router.post(
  "/profile/update/email/send_code",
  requireSignin,
  validateEmail,
  sendCodeToEmail
);
router.post(
  "/profile/update/email/verify_code",
  requireSignin,
  verifyCodeUpdateEmail
);

router.post("/a", insertCart);

router.get("/c", (req, res) => {
  throw new Error("fsdf");
});

export default router;
