import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 12,
      min: 6,
    },
    role: {
      type: String,
      default: "EMPLOYEE",
      enum: ["EMPLOYEE", "ADMIN"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
