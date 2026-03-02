import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import Employee from "../models/Employee.js";
import generateToken from "../utils/genratesToken.js";

/* ===========================
   ADMIN REGISTER
=========================== */
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: "admin",
      token: generateToken(admin._id, "admin"),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ===========================
   EMPLOYEE REGISTER
=========================== */
export const registerEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const employeeExists = await Employee.findOne({ email });
    if (employeeExists) {
      return res.status(400).json({ message: "Employee already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await Employee.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: employee._id,
      name: employee.name,
      email: employee.email,
      role: "employee",
      token: generateToken(employee._id, "employee"),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check Admin
    let user = await Admin.findOne({ email });
    let role = "admin";

    // 2️⃣ If not admin → Check Employee
    if (!user) {
      user = await Employee.findOne({ email });
      role = "employee";
    }

    // 3️⃣ If no user found
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 4️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 5️⃣ Send token
    res.json({
      token: generateToken(user._id, role),
      user: {
        id: user._id,
        role,
        name: role === "admin" ? user.name : user.name,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
