import { initializeApp } from "firebase/app";
import { Timestamp, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPCQX3U7Va8QJBEK981wam02VK1gKYQ-4",
  authDomain: "online-bank-781b4.firebaseapp.com",
  projectId: "online-bank-781b4",
  storageBucket: "online-bank-781b4.appspot.com",
  messagingSenderId: "490773278551",
  appId: "1:490773278551:web:6eaa9eb95227ab0cf15812",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const timestamp = Timestamp;

export { auth, db, timestamp };
