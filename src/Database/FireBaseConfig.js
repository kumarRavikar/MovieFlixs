// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlBfDtL1XbAHG_bAkxhUe0UddLcufkUEI",
  authDomain: "movieflix-app-c3298.firebaseapp.com",
  projectId: "movieflix-app-c3298",
  storageBucket: "movieflix-app-c3298.firebasestorage.app",
  messagingSenderId: "777616854386",
  appId: "1:777616854386:web:8dc7c00f4d564516f0a1eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//export const auth = getAuth(app);