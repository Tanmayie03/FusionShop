import orderModel from "../models/order.js";
import userModel from "../models/user.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address, paymentMethod } = req.body;

    if (!userId || !items || !amount || !address || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    if (paymentMethod === "Cashfree") {
      return res.status(501).json({
        success: false,
        message: "Cashfree payment method is not implemented yet.",
      });
    }
    if (paymentMethod === "COD") {
      const orderData = {
        userId,
        cartItems: items,
        address,
        status: "Order Placed",
        paymentMethod: "COD",
        totalAmount: amount,
        payment: false,
        date: Date.now(),
      };

      const newOrder = new orderModel(orderData);
      await newOrder.save();
      await userModel.findByIdAndUpdate(userId, { cartData: {} });

      return res.status(200).json({
        success: true,
        message: "Order Placed Successfully with COD payment.",
        data: newOrder,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid payment method.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const fetchOrders = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).send("User ID is required");
  }

  try {
    const orders = await orderModel.find({ userId: userId });
    res.json(orders);
    data: orders;
  } catch (error) {
    res.status(500).send("Failed to fetch orders");
  }
};

export { placeOrder, fetchOrders };
