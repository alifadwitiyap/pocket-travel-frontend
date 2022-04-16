import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import diaryReducer from "../features/diarySlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    diary: diaryReducer
  },
});
