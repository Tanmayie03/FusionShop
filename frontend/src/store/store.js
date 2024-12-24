import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import shoppingProductsReducer from "./shop/productsSlice";
import shopCartReducer from "./shop/cartSlice";
import addressReducer from "./shop/addressSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    shoppingProducts: shoppingProductsReducer,
    shopCart: shopCartReducer,
    address: addressReducer,
  },
});

export default store;
