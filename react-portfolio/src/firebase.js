import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import {apiKey, domain, projectId, storageBucket, messagingSenderId, appId, measurementId} from './fireconfig';

const firebaseConfig = {
  apiKey : apiKey,
  authDomain : domain,
  projectId :  projectId,
  storageBucket :  storageBucket,
  messagingSenderId :  messagingSenderId,
  appId :appId,
  measurementId : measurementId
}


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
