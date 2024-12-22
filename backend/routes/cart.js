import express from "express";
import {
  addToCart,
  deleteCartItem,
  fetchCartItems,
  updateCartItemQty,
} from "../controllers/cartController.js";

import authenticateUser from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.post("/add", authenticateUser, addToCart);
cartRouter.get("/get/:userId", authenticateUser, fetchCartItems);
cartRouter.put("/update-cart", authenticateUser, updateCartItemQty);
cartRouter.delete("/:userId/:productId", authenticateUser, deleteCartItem);

export default cartRouter;
