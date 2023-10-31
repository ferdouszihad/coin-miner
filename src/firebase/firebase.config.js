// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBom40wEeN9fdSotqCOy_sU-G_eZopXED0",
  authDomain: "auth-template-demo.firebaseapp.com",
  projectId: "auth-template-demo",
  storageBucket: "auth-template-demo.appspot.com",
  messagingSenderId: "287457049158",
  appId: "1:287457049158:web:11f3868548506646fde847",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
