// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcu05_7J2Bj-UpmJJwly0V6cdrvXCf69Q",
  authDomain: "ellespay-banking-app.firebaseapp.com",
  projectId: "ellespay-banking-app",
  storageBucket: "ellespay-banking-app.firebasestorage.app",
  messagingSenderId: "766464986613",
  appId: "1:766464986613:web:8e4995c0507e60a85e24bc",
  measurementId: "G-J18TBR03CB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

