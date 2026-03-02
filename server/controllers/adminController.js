import Admin from "../models/Admin.js";
import Employee from "../models/Employee.js";
import Task from "../models/Task.js";

export const createEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const employee = await Employee.create({
      name,
      email,
      password,
    });

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const assignTask = async (req, res) => {
  try {
    const { title, description, date, category, employeeId } = req.body;

    // Check employee exists
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Create task
    const task = await Task.create({
      title,
      description,
      date,
      category,
      employee: employeeId,
      assignedBy: req.user._id, // admin id from JWT
    });

    res.status(201).json({
      message: "Task assigned successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllEmployees = async (req, res) => {
  const employees = await Employee.find().select("-password");
  res.json(employees);
};
