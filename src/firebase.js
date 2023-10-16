// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZVXcY0J75hdyzTNJ-BBAL_dAl2NWJXCM",
  authDomain: "react-chat-a1795.firebaseapp.com",
  projectId: "react-chat-a1795",
  storageBucket: "react-chat-a1795.appspot.com",
  messagingSenderId: "478689050231",
  appId: "1:478689050231:web:68391f52d9b96d149a9072",
  measurementId: "G-MDTEY0CMEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);