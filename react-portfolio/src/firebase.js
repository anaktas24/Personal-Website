import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import '.firebaseconfig.js'

const firebaseConfig = {
  apiKey: "AIzaSyDFLL398A6dlA3c3nzMaetbmVufhCUvEVQ",
  authDomain: "react-portfolio-dashboar-413e0.firebaseapp.com",
  projectId: "react-portfolio-dashboar-413e0",
  storageBucket: "react-portfolio-dashboar-413e0.appspot.com",
  messagingSenderId: "141598938627",
  appId: "1:141598938627:web:1601d69df260a42c186036",
  measurementId: "G-F108YZFXCT"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
