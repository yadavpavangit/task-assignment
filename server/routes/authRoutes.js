import express from "express";
import {
  registerAdmin,
  registerEmployee,
  loginUser,
} from "../controllers/authController.js";;

const router = express.Router();

router.post("/admin/register", registerAdmin);
router.post("/employee/register", registerEmployee);
router.post("/login", loginUser);


export default router;
