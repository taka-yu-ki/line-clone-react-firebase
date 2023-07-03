import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUvLagJsMalCwkCeDoFSErz5pL_qtn6zY",
  authDomain: "line-clone-react-firebas-b0208.firebaseapp.com",
  projectId: "line-clone-react-firebas-b0208",
  storageBucket: "line-clone-react-firebas-b0208.appspot.com",
  messagingSenderId: "1074795862017",
  appId: "1:1074795862017:web:31ea3d1a40074d4a324800",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
