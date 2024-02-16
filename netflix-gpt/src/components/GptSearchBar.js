import React, { useRef } from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(0);
  const dispatch = useDispatch();

  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    //api call
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an api call to gpt ai and get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movie for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result ahead. Example Result: Gadar, Sholey,Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //todo: Write Error Hanlding
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    //for each movie i will search tmdb api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[promise,promise,promise,promise]

    const tmdbReasults = await Promise.all(promiseArray);
    dispatch(
      addGptResult({ movieNames: gptMovies, movieResults: tmdbReasults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
        onSubmitCapture={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
