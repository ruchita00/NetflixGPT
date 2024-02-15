import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moiveSlice from "./movieSlice";

const appStore = configureStore({
  reducer: { user: userSlice, movies: moiveSlice },
});

export default appStore;
