import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
  },
  { timestamps: true },
);

export default mongoose.model("Employee", employeeSchema);
