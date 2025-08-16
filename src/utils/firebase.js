// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHSX6jW1RnVTI8g_JZ8T_jAjTarRdlcNs",
  authDomain: "netflixgpt-6ead1.firebaseapp.com",
  projectId: "netflixgpt-6ead1",
  storageBucket: "netflixgpt-6ead1.firebasestorage.app",
  messagingSenderId: "152072740635",
  appId: "1:152072740635:web:3f60ae523358c321687dbe",
  measurementId: "G-88Q3BRXHL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();