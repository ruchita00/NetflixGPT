import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-[100vh] w-[100vw]" src={BG_URL} alt="netflix-logo" />
      </div>
      <form className="w-5/12 absolute my-36 mx-auto text-white right-0 left-0 p-12 bg-black rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>{" "}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full my-4 p-4 bg-gray-700"
          />
        )}{" "}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full my-4 p-4 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className=" bg-gray-700 w-full my-4 p-4"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign in Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
