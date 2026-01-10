import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/", userRoutes);


app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ellesPay";
await connectDB(MONGO_URI);

app.post("/test", (req, res) => {
  console.log("Body:", req.body);
  res.json({ received: req.body });
});
