// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8aGNRVHaEf_fqTF1pLjyVYaIAMxWEhs",
  authDomain: "closer-auth-26ed9.firebaseapp.com",
  projectId: "closer-auth-26ed9",
  storageBucket: "closer-auth-26ed9.firebasestorage.app",
  messagingSenderId: "426338964231",
  appId: "1:426338964231:web:b782a0bdce89b603f1aba2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
