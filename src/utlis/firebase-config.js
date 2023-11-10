
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAE2REz2UMiTd640RJpV569VHYRyJLDqOc",
  authDomain: "react-netflix-clone-f2955.firebaseapp.com",
  projectId: "react-netflix-clone-f2955",
  storageBucket: "react-netflix-clone-f2955.appspot.com",
  messagingSenderId: "783591450248",
  appId: "1:783591450248:web:7dd593f823b6a32847a13d",
  measurementId: "G-MZNRFNTQV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);