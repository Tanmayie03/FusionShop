import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productList: [],
};

const shopProductSlice = createSlice({
  name: "shoopingProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
