// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfKLu4S9q9MjmivPm8DFPxJh9sF2lRYKY",
  authDomain: "abhinayportfolio.firebaseapp.com",
  projectId: "abhinayportfolio",
  storageBucket: "abhinayportfolio.appspot.com",
  messagingSenderId: "868286314745",
  appId: "1:868286314745:web:5e0f9110dfc722c0844a28",
  measurementId: "G-K1MNNJDG3R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();