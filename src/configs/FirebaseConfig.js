import assert from "assert";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

assert(REACT_APP_FIREBASE_API_KEY, "FIREBASE_API_KEY is required.");
assert(REACT_APP_FIREBASE_AUTH_DOMAIN, "FIREBASE_AUTH_DOMAIN is required.");
assert(REACT_APP_FIREBASE_PROJECT_ID, "FIREBASE_PROJECT_ID is required.");
assert(
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  "FIREBASE_STORAGE_BUCKET is required."
);
assert(
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  "FIREBASE_MESSAGING_SENDER_ID is required."
);
assert(REACT_APP_FIREBASE_APP_ID, "FIREBASE_APP_ID is required.");
assert(
  REACT_APP_FIREBASE_MEASUREMENT_ID,
  "FIREBASE_MEASUREMENT_ID is required."
);

export const FirebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// export const app = "";

// export const app = initializeApp(FirebaseConfig);

// export const db = getFirestore(app);

//CRUD Operations on firebase database
// import { db } from "./firebase-config";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

// const userCollectionRef = collection(db, "users");
// //CREATE
// const createUser = async() => {
//   await addDoc(userCollectionRef, {
//     name: "ABC" + new Date(),
//     age: 100,
//   });
//}
// //READ
// const getUsers = async () => {
//   const data = await getDocs(userCollectionRef);
//   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// };
// //UPDATE
// const updateUser = async (id, age) => {
//   const userDoc = doc(db, "users", id);
//   const newFields = { age: age + 1 };
//   await updateDoc(userDoc, newFields);
// };
// //DELETE
// const deleteUser = async (id) => {
//   const userDoc = doc(db, "users", id);
//   await deleteDoc(userDoc);
// };
