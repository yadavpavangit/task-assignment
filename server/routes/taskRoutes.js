import express from "express";
import { getMyTasks, updateTaskStatus } from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Employee routes
router.get("/my-tasks", protect, getMyTasks);
router.put("/:id", protect, updateTaskStatus);

export default router;
