import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    try {
      const request = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!request.ok) {
        throw new Error("Error " + request.status);
      }

      const response = await request.json();
      sessionStorage.setItem("token", response.body.token);
      console.log(request.status);
      return response.body.token;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.error.message === "Error 400") {
          state.error = "Access denied! Invalid Credentials";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
