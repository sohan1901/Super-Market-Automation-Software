
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwJX4ClbtibZ9V-Nm1SzMaTSvC7wBzD7U",
  authDomain: "supermarketautomationsoftware.firebaseapp.com",
  projectId: "supermarketautomationsoftware",
  storageBucket: "supermarketautomationsoftware.appspot.com",
  messagingSenderId: "395338374573",
  appId: "1:395338374573:web:ebf001ef79db6726829524",
  measurementId: "G-LQ4KSRBCXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);