import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //Validate the form data

    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-[100%] w-[100%]" src={BG_URL} alt="netflix-logo" />
      </div>
      <form
        onSubmit={onSubmit}
        className="w-5/12 absolute my-36 mx-auto text-white right-0 left-0 p-12 bg-black rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>{" "}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full my-4 p-4 bg-gray-700"
          />
        )}{" "}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full my-4 p-4 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" bg-gray-700 w-full my-4 p-4"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
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
