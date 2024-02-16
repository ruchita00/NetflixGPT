import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    gptMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    addGptResult: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, addGptResult } =
  gptSlice.actions;

export default gptSlice.reducer;
