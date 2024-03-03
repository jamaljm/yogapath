import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBv0jQ2oXWh3l_ycLzUonhT0sCFNU2ZsQ",
  authDomain: "yogapath-689fc.firebaseapp.com",
  projectId: "yogapath-689fc",
  storageBucket: "yogapath-689fc.appspot.com",
  messagingSenderId: "890276953873",
  appId: "1:890276953873:web:d8396cc7d76d9c3ab616b0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
