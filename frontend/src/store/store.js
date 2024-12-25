import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import shoppingProductsReducer from "./shop/productsSlice";
import shopCartReducer from "./shop/cartSlice";
import addressReducer from "./shop/addressSlice";
import orderReducer from "./shop/orderSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    shoppingProducts: shoppingProductsReducer,
    shopCart: shopCartReducer,
    address: addressReducer,
    order: orderReducer,
  },
});

export default store;
