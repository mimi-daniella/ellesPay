import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export async function requireAuth(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token)
    return res
      .status(401)
      .json({ code: "NO_TOKEN", message: "Missing access token" });

  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await User.findById(payload.sub).select(
      "_id name email roles"
    );
    if (!user)
      return res
        .status(401)
        .json({ code: "INVALID_TOKEN", message: "Invalid token" });
    req.user = user;
    next();
  } catch {
    return res
      .status(401)
      .json({ code: "INVALID_TOKEN", message: "Invalid token" });
  }
}
