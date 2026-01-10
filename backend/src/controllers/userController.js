import bcrypt from "bcrypt";
import { User } from "../models/User.js";

export async function getMe(req, res) {
  res.json({ user: req.user });
}

export async function updateProfile(req, res) {
  const { name } = req.body;
  if (!name || name.length < 2) {
    return res.status(400).json({
      code: "VALIDATION_ERROR",
      message: "Name is required and must be at least 2 characters",
    });
  }
  const updated = await User.findByIdAndUpdate(
    req.user._id,
    { name },
    { new: true }
  ).select("_id name email roles");
  res.json({ user: updated });
}

export async function changePassword(req, res) {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    return res.status(400).json({
      code: "VALIDATION_ERROR",
      message: "Current and new password are required",
    });
  }
  const user = await User.findById(req.user._id);
  const ok = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!ok)
    return res.status(401).json({
      code: "INVALID_CREDENTIALS",
      message: "Current password is incorrect",
    });

  const passwordHash = await bcrypt.hash(newPassword, 10);
  user.passwordHash = passwordHash;
  await user.save();
  res.json({ message: "Password updated" });
}

export async function deleteMe(req, res) {
  try {
    await User.findByIdAndDelete(req.user._id);

    res.clearCookie("refreshToken");
    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong \n Failed to delete account" });
  }
}
