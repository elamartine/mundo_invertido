// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ0oePOjremNujJl3EwNbXbvAlGWZi_y4",
  authDomain: "mundoinvertido-9ded4.firebaseapp.com",
  projectId: "mundoinvertido-9ded4",
  storageBucket: "mundoinvertido-9ded4.appspot.com",
  messagingSenderId: "733159169420",
  appId: "1:733159169420:web:a525d6ab1051562167caa9",
  measurementId: "G-VS32N4S0BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app