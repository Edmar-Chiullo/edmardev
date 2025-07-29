// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7iKv0iBj9qpXMIl4Cq2lv5lkEAbKdMcY",
  authDomain: "db-mysite-3912a.firebaseapp.com",
  projectId: "db-mysite-3912a",
  storageBucket: "db-mysite-3912a.firebasestorage.app",
  messagingSenderId: "225940402856",
  appId: "1:225940402856:web:1685fdfdad1dfd4ff0889d",
  measurementId: "G-N7HX8LMV5M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);