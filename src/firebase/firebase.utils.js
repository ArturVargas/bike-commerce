import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { credentials } from '../firebase.credentials';

const config = {
  apiKey: "AIzaSyDGChf1Q81LDBwNBaE9Ckty0l5WLqWGGhY",
  authDomain: "bike-commerce-2a240.firebaseapp.com",
  databaseURL: "https://bike-commerce-2a240.firebaseio.com",
  projectId: "bike-commerce-2a240",
  storageBucket: "bike-commerce-2a240.appspot.com",
  messagingSenderId: "530124836635",
  appId: "1:530124836635:web:2f09739e01a9ac57108dbe"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapsShot = await userRef.get();

  if (!snapsShot.exists) {
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

export const addCollectionsAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });

  return await batch.commit();
}

export const collectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
