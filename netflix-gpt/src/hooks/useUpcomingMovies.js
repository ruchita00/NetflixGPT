import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  // curl --request GET \
  //  --url 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' \
  //  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGVlMGMzNjQ5Y2Y2MGY0OTJkZGZlMmEzNTlhMjM5OCIsInN1YiI6IjY1NjMzMDFiYjIzNGI5MDEzOTI4MGEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nCwDCLuK3qPLswAbkMTUspgqPkARWW1ARjCROuva2o4' \
  //  --header 'accept: application/json'
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useUpcomingMovies;
