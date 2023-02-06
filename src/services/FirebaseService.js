import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { FirebaseConfig } from "../configs/FirebaseConfig";

const firebaseApp = initializeApp(FirebaseConfig);

// console.log("firebaseApp", firebaseApp);

const FirebaseService = {};

FirebaseService.db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
FirebaseService.currentUser = auth.currentUser;
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

FirebaseService.signInEmailRequest = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((user) => user)
    .catch((err) => err);
};

FirebaseService.signOutRequest = async () =>
  await signOut(auth)
    .then((user) => user)
    .catch((err) => err);

FirebaseService.signInGoogleRequest = async () =>
  await signInWithPopup(auth, googleAuthProvider)
    .then((user) => user)
    .catch((err) => err);

FirebaseService.signInFacebookRequest = async () =>
  await signInWithPopup(auth, facebookAuthProvider)
    .then((user) => user)
    .catch((err) => err);

FirebaseService.signUpEmailRequest = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password)
    .then((user) => user)
    .catch((err) => err);

export default FirebaseService;
