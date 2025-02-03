// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTWgBGb1rowjj5mYk38bVD5MUyBcsuPWU",
  authDomain: "admin-panel-5874c.firebaseapp.com",
  projectId: "admin-panel-5874c",
  storageBucket: "admin-panel-5874c.firebasestorage.app",
  messagingSenderId: "134103446037",
  appId: "1:134103446037:web:94919ae3e78ae758f0541c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const auth = getAuth()

export const googleAuth=()=>{

  let provider = new GoogleAuthProvider()
    return signInWithPopup(auth,provider)

}
