// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiVuRloNE76b8CGKrbCvcImVns1Kb8_l0",
  authDomain: "stack-overflow-clone-ac2a4.firebaseapp.com",
  projectId: "stack-overflow-clone-ac2a4",
  storageBucket: "stack-overflow-clone-ac2a4.appspot.com",
  messagingSenderId: "743717189162",
  appId: "1:743717189162:web:e48b0e0083c1704708f553",
  measurementId: "G-V48MGX5EL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const provider =new GoogleAuthProvider();
