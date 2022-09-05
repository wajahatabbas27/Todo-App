// import firebase from package firebase which is just installed here!
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// connecting to credentials
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCf0u7UMJamiPiJbdJcSgOMmDh1uEDVvaA",
  authDomain: "todo-app-firebase-react-70d48.firebaseapp.com",
  projectId: "todo-app-firebase-react-70d48",
  storageBucket: "todo-app-firebase-react-70d48.appspot.com",
  messagingSenderId: "72657263080",
  appId: "1:72657263080:web:4e17790a5fab1fa9d7ac5d",
  measurementId: "G-CFZ4ZT3YZW",
});

// connecting to database firestore
const db = firebaseApp.firestore();

export default db;
