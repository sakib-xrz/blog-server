import { Router } from "express";
import authRoutes from "../api/auth/index.js";
import userRoutes from "../api/user/index.js";
import blogRoutes from "../api/blog/index.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);

export default router;
