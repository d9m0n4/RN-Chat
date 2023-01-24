// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxPSDg4wWTMLEhal3XRFXHYVNr_8uXpbU',
  authDomain: 'bank-e3d1e.firebaseapp.com',
  projectId: 'bank-e3d1e',
  storageBucket: 'bank-e3d1e.appspot.com',
  messagingSenderId: '764952949441',
  appId: '1:764952949441:web:112ed06b43c4a3d2531a40',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => signOut(auth);

export const db = getFirestore();
