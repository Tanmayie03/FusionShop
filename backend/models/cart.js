import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  items: [
    {
      productId: { type: Number, ref: "product", required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
