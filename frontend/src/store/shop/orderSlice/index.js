import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  orders: [],
  error: null,
  orderDetails: null,
};

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://fusionshop-backend.onrender.com/api/order/placeOrder",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (userId, { rejectWithValue }) => {
    console.log("Fetching orders for userId:", userId);
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return rejectWithValue({ message: "Authentication token is missing" });
      }

      const response = await axios.get(
        `https://fusionshop-backend.onrender.com/api/order/fetchOrders?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Fetch Orders Response:", response);
      console.log("Response Data:", response.data);

      if (response.data && Array.isArray(response.data.orders)) {
        console.log("Orders:", response.data.orders);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Unknown error" }
      );
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
        state.cartItems = []; // Empty the cart on successful order placement
        localStorage.removeItem("cartItems"); // Clear localStorage
        // Optionally, store the order details or success message
        // For example:
        // state.orderDetails = action.payload;
        console.log("Order placed successfully:", action.payload);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default orderSlice.reducer;
