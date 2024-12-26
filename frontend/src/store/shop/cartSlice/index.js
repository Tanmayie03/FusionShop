import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  cartItems: (() => {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
  })(),
  error: null,
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      const data = { userId, productId, quantity };
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/cart/add",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("cartItems");
        return [];
      } else {
        throw new Error("Failed to clear the cart");
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/cart/get/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data.items || [];
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteCartItems = createAsyncThunk(
  "cart/deleteCartItems",
  async ({ userId, productId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:5000/api/cart/${userId}/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
export const updateCartItemQty = createAsyncThunk(
  "cart/updateCartItemQty",
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.put(
        `http://localhost:5000/api/cart/update-cart`,
        { userId, productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.data?.items || [];
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const clearCartThunk = createAsyncThunk(
  "cart/clearCartThunk",
  async (userId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:5000/api/cart/clear?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("cartItems");
        return [];
      } else {
        throw new Error("Failed to clear the cart");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const clearCart = createAsyncThunk(
//   "cart/clearCart",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.delete(
//         `http://localhost:5000/api/cart/clear?userId=${userId}`,

//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         localStorage.removeItem("cartItems");

//         return [];
//       } else {
//         throw new Error("Failed to clear the cart");
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
const shopCartSlice = createSlice({
  name: "shopCart",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload || state.cartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.cartItems = [];
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload || [];
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.cartItems = [];
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteCartItems.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(deleteCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems =
          action.payload.data?.items ||
          state.cartItems.filter(
            (item) => item.productId !== action.meta.arg.productId
          );
      })

      .addCase(deleteCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(updateCartItemQty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartItemQty.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(updateCartItemQty.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(clearCartThunk.fulfilled, (state, action) => {
        console.log("Cart cleared in Redux state");
        state.isLoading = false;
        state.cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify([])); // Clear localStorage
      })
      .addCase(clearCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
  // .addCase(clearCart.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.cartItems = action.payload.data?.items || state.cartItems;
  //   state.cartItems = [];
  //   localStorage.setItem("cartItems", JSON.stringify([]));
  // })
  // .addCase(clearCart.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload || action.error.message;
  // });
});
// export const { clearCart } = shopCartSlice.actions;
export default shopCartSlice.reducer;
