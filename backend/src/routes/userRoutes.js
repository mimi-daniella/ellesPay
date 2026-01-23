import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import {
  getMe,
  updateProfile,
  changePassword,
  deleteMe
} from "../controllers/userController.js";
 
const router = Router();

router.get("/me", requireAuth, getMe);
router.patch("/me/profile", requireAuth, updateProfile);
router.patch("/me/password", requireAuth, changePassword);
router.delete("/me/deleteMe", requireAuth, deleteMe);

export default router;
