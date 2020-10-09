import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "skocko.firebaseapp.com",
  databaseURL: "https://skocko.firebaseio.com",
  projectId: "skocko",
  storageBucket: "skocko.appspot.com",
  messagingSenderId: "250308406062",
  appId: "1:250308406062:web:88b61ba4caa42a4a83e8bf",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
