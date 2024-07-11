import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: "react-firebase-chat-a8be9.firebaseapp.com",
  projectId: "react-firebase-chat-a8be9",
  storageBucket: "react-firebase-chat-a8be9.appspot.com",
  messagingSenderId: "69879780143",
  appId: "1:69879780143:web:a47c60e6c34d67e69947da",
  measurementId: "G-D14PS7CFQW"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);