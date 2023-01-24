// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFLL398A6dlA3c3nzMaetbmVufhCUvEVQ",
  authDomain: "react-portfolio-dashboar-413e0.firebaseapp.com",
  projectId: "react-portfolio-dashboar-413e0",
  storageBucket: "react-portfolio-dashboar-413e0.appspot.com",
  messagingSenderId: "141598938627",
  appId: "1:141598938627:web:1601d69df260a42c186036",
  measurementId: "G-F108YZFXCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
