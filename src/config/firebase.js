import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj7_DdtpBzBzHhdBrVifUtLTENar4M5q0",
  authDomain: "appregistro-ecc6d.firebaseapp.com",
  projectId: "appregistro-ecc6d",
  storageBucket: "appregistro-ecc6d.appspot.com",
  messagingSenderId: "631465363579",
  appId: "1:631465363579:web:b1f9f5fc0151146ae0bade"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);