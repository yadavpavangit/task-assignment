import express from "express";
import {
  assignTask,
  getAllEmployees,
  createEmployee,
} from "../controllers/adminController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ========= ADMIN ROUTES ========= */

// Create employee (admin only)
router.post("/create-employee", protect, adminOnly, createEmployee);

// Assign task to employee
router.post("/assign-task", protect, adminOnly, assignTask);

// Get all employees
router.get("/employees", protect, adminOnly, getAllEmployees);

export default router;
