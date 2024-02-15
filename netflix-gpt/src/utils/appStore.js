import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moiveSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "../hooks/configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moiveSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});

export default appStore;
