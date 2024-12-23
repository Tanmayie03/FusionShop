import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  items: [
    {
      productId: { type: Number, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
});

const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
