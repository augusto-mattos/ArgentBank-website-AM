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

const tokenFromSessionStorage = sessionStorage.getItem("token");

const initialState = {
  userToken: tokenFromSessionStorage || "",
  isAuthenticated: !!tokenFromSessionStorage,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userToken = action.payload; 
      state.isAuthenticated = true; 
    });
  },
});

export default authenticationSlice.reducer;
