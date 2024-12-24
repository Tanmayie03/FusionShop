import orderModel from "../models/order.js";
import userModel from "../models/user.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      cartItems: items,
      address: address,
      status: "Order Placed",
      paymentMethod: "COD",
      totalAmount: amount,
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.status(200).json({
      success: true,
      message: "Order Placed Successfully with COD payment.",
      data: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { placeOrder };

const placeOrderStripe = async (req, res) => {};
const allOrders = async (req, res) => {};
const userOrders = async (req, res) => {};
const updateStatus = async (req, res) => {};
export { placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus };
