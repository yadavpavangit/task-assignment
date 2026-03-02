import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    date: String,
    category: String,
    status: {
      type: String,
      enum: ["new", "active", "completed", "failed"],
      default: "new",
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Task", taskSchema);
