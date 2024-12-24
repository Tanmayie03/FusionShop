import express from "express";

import authenticateUser from "../middleware/authenticateUser.js";
import {
  addToCart,
  deleteCartItem,
  fetchCartItems,
  updateCartItemQty,
} from "../controllers/cartControllers.js";

const cartRouter = express.Router();

cartRouter.post("/add", authenticateUser, addToCart);
cartRouter.get("/get/:userId", authenticateUser, fetchCartItems);
cartRouter.put("/update-cart", authenticateUser, updateCartItemQty);
cartRouter.delete("/:userId/:productId", authenticateUser, deleteCartItem);

export default cartRouter;
