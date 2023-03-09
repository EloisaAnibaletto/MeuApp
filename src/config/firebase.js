import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDj7_DdtpBzBzHhdBrVifUtLTENar4M5q0",
  authDomain: "appregistro-ecc6d.firebaseapp.com",
  projectId: "appregistro-ecc6d",
  storageBucket: "appregistro-ecc6d.appspot.com",
  messagingSenderId: "631465363579",
  appId: "1:631465363579:web:b1f9f5fc0151146ae0bade"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
