import mongoose, { Mongoose } from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  size: { type: Array, required: true },
  date: { type: Date, default: Date.now },
  rating: { type: Number, required: true },
  count: { type: Number, required: true, min: 0 },
});
productSchema.set("autoIndex", false);
const productModel = mongoose.model("product", productSchema);

export default productModel;
