import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    userId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
  },
  { timestamps: true }
);

const addressModel = mongoose.model("address", addressSchema);

export default addressModel;
