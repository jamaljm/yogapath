import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZtX6goycDuTXatuFeqJ13MGUP34r600M",
  authDomain: "srm1-8160c.firebaseapp.com",
  databaseURL: "https://srm1-8160c-default-rtdb.firebaseio.com",
  projectId: "srm1-8160c",
  storageBucket: "srm1-8160c.appspot.com",
  messagingSenderId: "193086720098",
  appId: "1:193086720098:web:cc2c604c142da00eb0a93b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
