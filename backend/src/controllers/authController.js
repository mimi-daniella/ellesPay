import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const ACCESS_TTL = "15m";
const REFRESH_TTL = "7d";

function signAccessToken(user) {
  return jwt.sign(
    { sub: user._id, roles: user.roles },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: ACCESS_TTL }
  );
}

function signRefreshToken(user) {
  return jwt.sign({ sub: user._id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TTL,
  });
}

export async function register(req, res) {
  console.log("Incoming body");
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing)
    return res
      .status(409)
      .json({ code: "EMAIL_IN_USE", message: "Email already registered" });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    passwordHash,
    roles: ["client"],
  });

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 1000,
    })
    .status(201) //created
    .json({
      accessToken,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        roles: user.roles,
      },
    });
    console.log("user created successfully")
}

export async function login(req, res) {
  console.log("Incoming body")
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(401).json({
      code: "INVALID_CREDENTIALS",
      message: "Invalid email or password",
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
    console.log("user logged in successfully")
}

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

export async function logout(req, res) {
  res.clearCookie("refreshToken").json({ message: "Logged out" });
}
