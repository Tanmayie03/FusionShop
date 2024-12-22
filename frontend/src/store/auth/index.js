import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const storedAuth = JSON.parse(localStorage.getItem("auth"));

const initialState = {
  isAuthenticated: storedAuth?.success || false,
  isLoading: true,
  user: storedAuth?.data || null,
};

export const registerUser = createAsyncThunk(
  "/auth/registerUser",
  async (data) => {
    try {
      const response = await axios.post("/api/user/register", data);
      console.log("Registration successful:", response.data);
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }
);

export const loginUser = createAsyncThunk("/auth/loginUser", async (data) => {
  try {
    const response = await axios.post("/api/user/login", data);
    console.log("Login response data:", response.data);
    if (response.data.success) {
      const authData = { success: true, data: response.data.user };
      localStorage.setItem("auth", JSON.stringify(authData));
    }

    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error);
    throw error.response?.data || error;
  }
});

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("auth");
  dispatch(setUser(null));
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Ensure user data is returned and used
        state.isAuthenticated = true; // Set authentication status
      })

      .addCase(registerUser.rejected, (state) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data; // Ensure user data is returned and used
        state.isAuthenticated = action.payload.success; // Set authentication status
      })

      .addCase(loginUser.rejected, (state) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
