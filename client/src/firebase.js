// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-app-b4afe.firebaseapp.com",
  projectId: "mern-auth-app-b4afe",
  storageBucket: "mern-auth-app-b4afe.appspot.com",
  messagingSenderId: "473420409769",
  appId: "1:473420409769:web:cad54497fe7f77a15932b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);