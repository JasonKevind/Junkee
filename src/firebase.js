import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAEx2dVsenuaaLHFEfOGA4xJ5m9OLpgRrk",
  authDomain: "junkie-ea393.firebaseapp.com",
  projectId: "junkie-ea393",
  storageBucket: "junkie-ea393.appspot.com",
  messagingSenderId: "539295248607",
  appId: "1:539295248607:web:cb0c593b06a9e5c774b96a",
  measurementId: "G-E8H3L445WW",
  firestore: {
    settings: {
      host: 'localhost:8080',
      ssl: true,
    },
  },
};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);