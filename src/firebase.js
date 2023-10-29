// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-app-f5a98.firebaseapp.com",
  projectId: "mern-estate-app-f5a98",
  storageBucket: "mern-estate-app-f5a98.appspot.com",
  messagingSenderId: "583887989851",
  appId: "1:583887989851:web:9ba5f8ad801cb23c8de37e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);