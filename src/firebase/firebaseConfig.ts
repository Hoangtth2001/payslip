// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3vxbEo6qmX_s0l6uFMb90_o76ghHxV60",
  authDomain: "staff-management-698f5.firebaseapp.com",
  projectId: "staff-management-698f5",
  storageBucket: "staff-management-698f5.firebasestorage.app",
  messagingSenderId: "140456227809",
  appId: "1:140456227809:web:75b3ef896bfe9929ddd8a0",
  measurementId: "G-PTCD9909BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);