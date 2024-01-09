import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoginUser } from "../api/userApi";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    try {
      const response = await fetchLoginUser(userCredentials);
      sessionStorage.setItem("token", response.body.token)
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  userToken: "",
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.userToken = action.payload.token;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.userToken = "";
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
