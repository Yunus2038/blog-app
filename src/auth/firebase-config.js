
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKOCjMaU60tvdvj8LBHfD1ssK7YX1kPs0",
  authDomain: "blog-app-97251.firebaseapp.com",
  projectId: "blog-app-97251",
  storageBucket: "blog-app-97251.appspot.com",
  messagingSenderId: "383253068893",
  appId: "1:383253068893:web:b616bb3df8c6b1d456e1b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
