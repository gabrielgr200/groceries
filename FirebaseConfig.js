import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCK11tuoUICoQAyZ5LCKodb5GkAKI-3xjc",
  authDomain: "nectar-abc52.firebaseapp.com",
  projectId: "nectar-abc52",
  storageBucket: "nectar-abc52.appspot.com",
  messagingSenderId: "532416017327",
  appId: "1:532416017327:web:649c04a74d261dc45e755a",
  measurementId: "G-4PE9RZWPCH"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const databese = getFirestore();


export { authentication, databese };