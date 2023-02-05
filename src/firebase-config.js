// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBvDxR3ldtAqRvcQ-pPDRJHuYMfrKS4tk",
  authDomain: "first-auth-1ce52.firebaseapp.com",
  projectId: "first-auth-1ce52",
  storageBucket: "first-auth-1ce52.appspot.com",
  messagingSenderId: "328550224288",
  appId: "1:328550224288:web:9ef23542c525572b5c14c5",
  measurementId: "G-XQ6GWNE1GX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
