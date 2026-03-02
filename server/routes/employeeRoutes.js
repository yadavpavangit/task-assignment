import express from "express";
import Employee from "../models/Employee.js";
const router = express.Router();

// Get all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Add task to employee
router.post("/:id/tasks", async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  employee.tasks.push(req.body);
  await employee.save();

  res.json(employee);
});

// Delete task
router.delete("/:empId/tasks/:taskId", async (req, res) => {
  const employee = await Employee.findById(req.params.empId);

  employee.tasks = employee.tasks.filter(
    (task) => task._id.toString() !== req.params.taskId,
  );

  await employee.save();

  res.json(employee);
});

export default router;
