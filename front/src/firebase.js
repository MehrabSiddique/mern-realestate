// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-680d5.firebaseapp.com",
  projectId: "real-estate-680d5",
  storageBucket: "real-estate-680d5.firebasestorage.app",
  messagingSenderId: "334377587830",
  appId: "1:334377587830:web:f537891729eb5c09bd7b57",
  measurementId: "G-2N3G4FSHWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };