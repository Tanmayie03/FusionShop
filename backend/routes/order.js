import express from "express";

import authenticateUser from "../middleware/authenticateUser.js";
import adminAuth from "../middleware/adminAuth.js";
import { fetchOrders, placeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/placeOrder", authenticateUser, placeOrder);
orderRouter.get("/fetchOrders", authenticateUser, fetchOrders);
// orderRouter.post("/status", adminAuth, updateStatus);
// orderRouter.post("/userorders", authenticateUser, userOrders);

export default orderRouter;
