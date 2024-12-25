import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  cartItems: [
    {
      productId: String,
      title: String,
      image: String,
      price: Number,
      quantity: Number,
    },
  ],
  address: {
    addressId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
  },
  status: { type: String, required: true, default: "Order Placed" },
  paymentMethod: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  payment: { type: Boolean, required: true, default: false },
  date: { type: Number, required: true, default: Date.now },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
