import { createSlice } from "@reduxjs/toolkit";

const diarySlice = createSlice({
  name: "auth",
  initialState: {
    diary: []
  },
  reducers: {
    setDiary: (state, action) => {
      state.diary = action.payload;
    },
  },
});

export const { setDiary } = diarySlice.actions;
export default diarySlice.reducer;
