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
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.get("/single", adminAuth, singleProduct);

export default productRouter;
