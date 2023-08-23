// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
// import firebase from 'firebase/app';
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import{ getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgwJjp0qgGD4Ny9inopwj3c-HT7a-MKLo",
  authDomain: "chatapp-88530.firebaseapp.com",
  projectId: "chatapp-88530",
  storageBucket: "chatapp-88530.appspot.com",
  messagingSenderId: "136938458410",
  appId: "1:136938458410:web:7eb2578850a3dc61dc2253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app)