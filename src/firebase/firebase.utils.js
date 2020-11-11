import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { credentials } from '../firebase.credentials';

const config = {
  apiKey: "AIzaSyCHFOGiw6IdLhh5rwOqUjDBEdv4zAXa-_g",
  authDomain: "bike-commerce-85294.firebaseapp.com",
  databaseURL: "https://bike-commerce-85294.firebaseio.com",
  projectId: "bike-commerce-85294",
  storageBucket: "bike-commerce-85294.appspot.com",
  messagingSenderId: "713615542562",
  appId: "1:713615542562:web:6893fe15248c7ed6f07d7b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

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
