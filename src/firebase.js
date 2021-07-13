import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAI7yPnV5DiOAEgW0kGRhh9NsuePU3gmU4",
  authDomain: "drawing-b8a00.firebaseapp.com",
  projectId: "drawing-b8a00",
  storageBucket: "drawing-b8a00.appspot.com",
  messagingSenderId: "563652193074",
  appId: "1:563652193074:web:134deadd221d5ceed4c52b",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();
export const storage = firebase.storage();
