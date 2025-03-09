// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Load token & user from localStorage
const storedAuth = JSON.parse(localStorage.getItem("auth")) || null;
const storedToken = localStorage.getItem("token") || "";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        data
      );
      const { success, token, user } = response.data;
      if (!success || !token) {
        throw new Error("Invalid credentials");
      }
      localStorage.setItem("auth", JSON.stringify({ success, user }));
      localStorage.setItem("token", token);
      return { success, user, token };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("auth");
  localStorage.removeItem("token");
  dispatch(setUser(null));
  dispatch(removeUser());
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedAuth?.user || null,
    token: storedToken,
    isAuthenticated: storedAuth ? true : false,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    removeUser: (state) => {
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
