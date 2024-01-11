import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile } from "../api/userApi";

export const userInfos = createAsyncThunk("user/userInfos", async () => {
  try {
    const response = await fetchUserProfile();
    //console.log(response);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = { userName: "", firstName: "", lastName: "" };

const userProfile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    /*setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setFirstName: (state, action) => {
      state.userName = action.payload;
    },
    setLastName: (state, action) => {
      state.userName = action.payload;
    },*/
  },
  extraReducers: (builder) => {
    builder.addCase(userInfos.fulfilled, (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    });
  },
});

export const { setUserName, setFirstName, setLastName } = userProfile.actions;
export default userProfile.reducer;
