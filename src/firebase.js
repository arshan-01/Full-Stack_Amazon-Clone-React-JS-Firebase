// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdCjMa0QZWVTULhkQmOkqTM3pyHEYwJ_I",
  authDomain: "clone-react-js-767fd.firebaseapp.com",
  projectId: "clone-react-js-767fd",
  storageBucket: "clone-react-js-767fd.appspot.com",
  messagingSenderId: "978909396129",
  appId: "1:978909396129:web:6f7b4598114078c49004e0",
  measurementId: "G-8WRVNT1WGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
