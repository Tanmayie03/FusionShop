import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import shoppingProductsReducer from "./shop/productsSlice";
import shopCartSlice from "./shop/cartSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    shoppingProducts: shoppingProductsReducer,
    shopCart: shopCartSlice,
  },
});

export default store;
