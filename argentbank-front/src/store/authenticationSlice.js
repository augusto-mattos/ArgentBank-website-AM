import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoginUser } from "../api/userApi";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    try {
      const response = await fetchLoginUser(userCredentials);
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      console.log(action.payload.user)
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
