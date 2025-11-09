import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_APIKEY } from "../utils/constants";

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: "journalz-3a168.firebaseapp.com",
  projectId: "journalz-3a168",
  storageBucket: "journalz-3a168.firebasestorage.app",
  messagingSenderId: "8057310361",
  appId: "1:8057310361:web:bb7e8ddc1befa796ecbc08",
  measurementId: "G-538FQJB60F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
