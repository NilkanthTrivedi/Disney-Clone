import firebase from "firebase/app";

require("firebase/auth");
require("firebase/storage");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBD7xzClXgKs-8OQnFNgbLpy5vtT2jIL9U",
    authDomain: "disneyplusclone-6f1db.firebaseapp.com",
    projectId: "disneyplusclone-6f1db",
    storageBucket: "disneyplusclone-6f1db.appspot.com",
    messagingSenderId: "842030387571",
    appId: "1:842030387571:web:ffd9d2ce9bf69a14bf3506",
    measurementId: "G-7J59D6897M",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
export default db;
