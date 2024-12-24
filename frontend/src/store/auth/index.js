import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const storedAuth = JSON.parse(localStorage.getItem("auth") || "{}");
console.log("Stored Auth from localStorage:", storedAuth);
const initialState = {
  isAuthenticated: storedAuth?.success || false,
  isLoading: true,
  user: storedAuth?.user || null,
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

    const { success, token, user } = response.data || {};

    if (success && token) {
      const authData = { success, user: user || null }; // Use null if user data is missing
      localStorage.setItem("auth", JSON.stringify(authData));
      localStorage.setItem("token", token);

      return { success, user: user || null, token }; // Return null for user if not available
    } else {
      throw new Error("Login failed, missing user or token");
    }
  } catch (error) {
    console.error("Login failed:", error.response?.data || error);
    throw error.response?.data || error;
  }
});

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("auth");
  localStorage.removeItem("token");
  dispatch(setUser(null));
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
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
        const { success, token, user } = action.payload || {};

        if (success && token) {
          state.isAuthenticated = true;
          state.user = user || null;
          localStorage.setItem(
            "auth",
            JSON.stringify({ success, user: user || null })
          );
          localStorage.setItem("token", token);
        } else {
          state.isAuthenticated = false;
          state.user = null;
        }
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
