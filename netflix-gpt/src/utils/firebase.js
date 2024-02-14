// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBeyqXm0Vj46rZ3lkROyASd3EmaCY1dvw",
  authDomain: "netflixgpt-626e0.firebaseapp.com",
  projectId: "netflixgpt-626e0",
  storageBucket: "netflixgpt-626e0.appspot.com",
  messagingSenderId: "391820869540",
  appId: "1:391820869540:web:547cf51222a4e5289f4b31",
  measurementId: "G-B56RP1824T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
