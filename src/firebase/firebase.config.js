// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa_n_W_j1u5SyiRfBu5LWRQiDem5G7gsQ",
  authDomain: "task-client-276e9.firebaseapp.com",
  projectId: "task-client-276e9",
  storageBucket: "task-client-276e9.appspot.com",
  messagingSenderId: "260507267789",
  appId: "1:260507267789:web:b57178520e469d532a2f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;