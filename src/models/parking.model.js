import mongoose from "mongoose";

const parkingSchema = new mongoose.Schema(
  {
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: true,
    },
    nameVehicle: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    documentNumber: {
      type: String,
      required: true,
    },
    plate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "ACTIVE",
      enum: ["ACTIVE", "COMPLETED"],
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Parking", parkingSchema);
