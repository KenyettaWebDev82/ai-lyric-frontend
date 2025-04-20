// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdMkFJ7D7M70BDx1nEyCbtAylTc1OIuxo",
  authDomain: "ai-lyric-generator.firebaseapp.com",
  projectId: "ai-lyric-generator",
  storageBucket: "ai-lyric-generator.firebasestorage.app",
  messagingSenderId: "86041069363",
  appId: "1:86041069363:web:8da314781d99860b3de046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize and export Firebase Auth
export const auth = getAuth(app);