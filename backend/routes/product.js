import express from "express";
import {
  addProduct,
  displayProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();
productRouter.post("/add", adminAuth, addProduct);
productRouter.get("/display", adminAuth, displayProduct);
productRouter.delete("/remove/:id", adminAuth, removeProduct);
productRouter.get("/single/:id", adminAuth, singleProduct);

export default productRouter;
