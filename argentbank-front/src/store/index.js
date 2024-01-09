import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import userProfileReducer from "./userProfileSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
