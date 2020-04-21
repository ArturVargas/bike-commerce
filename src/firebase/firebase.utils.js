import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { credentials } from '../firebase.credentials';

const config = {
  ...credentials
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapsShot = await userRef.get();

  if(!snapsShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('No se pudo Crear el Usuario', error.message);
    }
  
  }
  return userRef;
};

export default firebase;
