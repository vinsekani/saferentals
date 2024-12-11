
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA34JNWIjEqEjh7IDl0FuEf6Hfx8OjxPKI",
  authDomain: "saferentals-f4de7.firebaseapp.com",
  projectId: "saferentals-f4de7",
  storageBucket: "saferentals-f4de7.firebasestorage.app",
  messagingSenderId: "237316843949",
  appId: "1:237316843949:web:8afb6d78838345cf861924"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const auth = getAuth(app)