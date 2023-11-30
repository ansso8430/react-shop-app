// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqw14l_pKpm8hBC6D7CNyfIc8H4D-2iec",
  authDomain: "next-shop-app-d199e.firebaseapp.com",
  projectId: "next-shop-app-d199e",
  storageBucket: "next-shop-app-d199e.appspot.com",
  messagingSenderId: "884908648262",
  appId: "1:884908648262:web:ce34f1e6bd3b6c81a2e747",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
