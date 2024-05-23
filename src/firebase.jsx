import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUU8SgTClDyjFsdFhGETsQlVcknR0ALhQ",
  authDomain: "pricecompare-47255.firebaseapp.com",
  projectId: "pricecompare-47255",
  storageBucket: "pricecompare-47255.appspot.com",
  messagingSenderId: "408494716354",
  appId: "1:408494716354:web:f63054e7d125bf42da125b",
  measurementId: "G-VBHX7223WF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
