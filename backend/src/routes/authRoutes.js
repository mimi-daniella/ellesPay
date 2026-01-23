import { Router } from "express";
import {
  register,
  resendToken,
  verifyEmail,
  refresh,
  logout,
  forgotPassword,
  deleteAllAccounts,
  resetPassword,
  login,
  deleteAccount,

} from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { registerSchema, loginSchema } from "../validation/authSchemas.js";


const router = Router();
   
router.post("/register", validate(registerSchema), register);
router.post("/resend-token", resendToken);
router.post("/verify-email", verifyEmail)
router.post("/login", validate(loginSchema), login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/delete-all", deleteAllAccounts);
router.delete("/delete-account/:id", deleteAccount);

export default router;

