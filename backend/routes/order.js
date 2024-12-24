import express from "express";

import authenticateUser from "../middleware/authenticateUser.js";
import adminAuth from "../middleware/adminAuth.js";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authenticateUser, placeOrder);
orderRouter.post("/razorpay", authenticateUser, placeOrderRazorpay);
orderRouter.post("list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);
orderRouter.post("/userorders", authenticateUser, userOrders);

export default orderRouter;
