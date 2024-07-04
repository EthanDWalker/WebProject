// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEVVMHu7T6xpSQsimWRoNhVK2FFgowuIs",
  authDomain: "kevin-cookie-company-70aea.firebaseapp.com",
  projectId: "kevin-cookie-company-70aea",
  storageBucket: "kevin-cookie-company-70aea.appspot.com",
  messagingSenderId: "467963731153",
  appId: "1:467963731153:web:853a7d0b82fb2ee637f9f0",
  measurementId: "G-8DRR8KZV93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);