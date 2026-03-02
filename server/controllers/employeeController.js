import Employee from "../models/Employee.js";

export const getEmployeeProfile = async (req, res) => {
  const employee = await Employee.findById(req.user._id).select("-password");
  res.json(employee);
};
