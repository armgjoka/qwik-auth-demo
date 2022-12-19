
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDtIOhmqP2cYTKnilXH5jqmp28fSWr8TQ",
    authDomain: "qwik-auth-demo.firebaseapp.com",
    projectId: "qwik-auth-demo",
    storageBucket: "qwik-auth-demo.appspot.com",
    messagingSenderId: "850545361632",
    appId: "1:850545361632:web:6a7b642a807ee4b3068685",
    measurementId: "G-HTDY35CV22"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);