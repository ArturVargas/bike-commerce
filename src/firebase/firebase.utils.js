import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "yourAPIKey",
  authDomain: "bike-commerce-85294.firebaseapp.com",
  databaseURL: "yourDatabaseURL",
  projectId: "bike-commerce-85294",
  storageBucket: "bike-commerce-85294.appspot.com",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
