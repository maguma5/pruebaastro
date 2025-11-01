// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzbg0LWeWyPh7-0zRb_lMoTffWNArr0Fg",
  authDomain: "trabajadores-e0f92.firebaseapp.com",
  projectId: "trabajadores-e0f92",
  storageBucket: "trabajadores-e0f92.firebasestorage.app",
  messagingSenderId: "1064018097601",
  appId: "1:1064018097601:web:769b14e7851dcef6ec6b40",
  measurementId: "G-BZQ0KJ6CJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
