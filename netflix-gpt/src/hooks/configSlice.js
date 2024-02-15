import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLagauges: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLagauges } = configSlice.actions;
export default configSlice.reducer;
