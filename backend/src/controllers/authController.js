import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { User } from "../models/User.js";
import sendEmail from "../utils/sendEmail.js";
import moment from "moment-timezone";

const ACCESS_TTL = "15m";
const REFRESH_TTL = "7d";

function signAccessToken(user) {
  return jwt.sign(
    { sub: user._id, roles: user.roles },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: ACCESS_TTL },
  );
}

function signRefreshToken(user) {
  return jwt.sign({ sub: user._id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TTL,
  });
}


function generateAccountNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}


// REGISTER
export async function register(req, res) {
  try {
    const { name, email, password, phoneNumber } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res
        .status(409)
        .json({ code: "EMAIL_IN_USE", message: "Email already registered" });

    const existingPhone = await User.findOne({ phoneNumber });
    if (existingPhone)
      return res.status(409).json({
        code: "PHONE_IN_USE",
        message: "Phone number already registered",
      });

    const passwordHash = await bcrypt.hash(password, 10);

    const emailToken = Math.floor(1000 + Math.random() * 9000).toString();

      const accountNumber = generateAccountNumber();

    const user = await User.create({
      name,
      email,
      phoneNumber,
      passwordHash,
      roles: ["client"],
      accountNumber,
      isEmailVerified: false,
      emailToken,
      emailTokenExpires: Date.now() + 2 * 60 * 1000, //2 minutes
    });

    await sendEmail(
      user.email,
      "Verify your ellesPay account",
      `<p>Please verify your ellesPay account using this token: <br/> <b>${emailToken}</b></p>`,
    );

    res.status(201).json({
      message:
        "If the email exists, we have sent a code to the account, please check your email account to verify your account.",
    });
  } catch (error) {
    console.error("Registration error: ", error);
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
}

//RESEND TOKEN
export async function resendToken(req, res) {
  try{
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const newToken = Math.floor(1000 + Math.random() * 9000).toString();
  user.emailToken = newToken;
  user.emailTokenExpires = Date.now() + 2 * 60 * 1000;
  await user.save();

  await sendEmail(
    user.email,
    "Resend Verification Token",
    `<p>Your new verification token is: <br/> <b>${newToken}</b></p>`,
  );
  res.status(200).json({message: "Verification token resent successfully"})
} catch(error){
  console.error("Resend token error: ", error);
  res.status(500).jsoon({message: "Resend token error"})
}
}

// VERIFY EMAIL
export async function verifyEmail(req, res) {
  try{
  const { email, token } = req.body;
  const user = await User.findOne({ email, emailToken: token });
  if (!user) return res.status(400).json({ message: "Invalid token" });

  if (user.emailTokenExpires < Date.now()) {
    return res 
      .status(400)
      .json({ message: "Token expired, please request a new one" });
  }



  user.isEmailVerified = true;
  user.emailToken = null;
  user.emailTokenExpires = null;
  await user.save();

  res.json({
    message: "Email verified successfully",
  });
}  catch(error){
  console.error("Email verification error: ", error);
  res.status(500).json({ message: "Email verification failed" });
}}

// LOGIN
export async function login(req, res) {
  const { email, password, phoneNumber } = req.body;
  let user;

  if (email) user = await User.findOne({ email });
  else if (phoneNumber) user = await User.findOne({ phoneNumber });

  if (!user)
    return res.status(401).json({
      code: "INVALID_CREDENTIALS",
      message: "Invalid email or password",
    });

  if (!user.isEmailVerified)
    return res.status(401).json({
      code: "EMAIL_NOT_VERIFIED",
      message: "Please verify your email before logging in",
    });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok)
    return res.status(401).json({
      code: "INVALID_CREDENTIALS",
      message: "Invalid email or password",
    });

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    .json({
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        roles: user.roles,
      },
    });
}

// REFRESH TOKEN
export async function refresh(req, res) {
  const token = req.cookies?.refreshToken;
  if (!token)
    return res
      .status(401)
      .json({ code: "NO_REFRESH", message: "Missing refresh token" });

  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(payload.sub);
    if (!user)
      return res
        .status(401)
        .json({ code: "INVALID_REFRESH", message: "Invalid refresh token" });

    const accessToken = signAccessToken(user);
    res.json({ accessToken });
  } catch {
    res
      .status(401)
      .json({ code: "INVALID_REFRESH", message: "Invalid refresh token" });
  }
}

// LOGOUT
export async function logout(req, res) {
  res.clearCookie("refreshToken").json({ message: "Logged out" });
}

// FORGOT PASSWORD
export async function forgotPassword(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const resetToken = Math.floor(1000 + Math.random() * 9000).toString();
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
  await user.save();

  await sendEmail(
    user.email,
    "Reset your ellesPay password",
    `Use this token to reset your password: ${resetToken}`,
  );

  res.json({ message: "Password reset email sent" });
}

// RESET PASSWORD
export async function resetPassword(req, res) {
  const { token, newPassword } = req.body;
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user)
    return res.status(400).json({ message: "Invalid or expired token" });

  user.passwordHash = await bcrypt.hash(newPassword, 10);
  user.resetPasswordToken = null;
  user.resetPasswordExpires = null;
  await user.save();

  res.json({ message: "Password has been reset successfully" });
}

// DELETE ALL ACCOUNTS
export async function deleteAllAccounts(req, res) {
  try {
    await User.deleteMany({});
    res.json({ message: "All accounts deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE SINGLE ACCOUNT
export async function deleteAccount(req, res) {
  try {
    const { id } = req.body;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
