import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAyFLHildxuut5TcCIn9ibhYmFyXlVGTTQ",
  authDomain: "primariacomunagruia.firebaseapp.com",
  databaseURL: "https://primariacomunagruia.firebaseio.com",
  projectId: "primariacomunagruia",
  storageBucket: "primariacomunagruia.appspot.com",
  messagingSenderId: "969269178215"
};

firebase.initializeApp(config);

export const databaseRef = firebase.database().ref();
export const authRef = firebase.auth();
export const categoriesRef = databaseRef.child('category');
export const storageRef = firebase.storage().ref('documents');
export const messagingRef = firebase.messaging();
export const provider = new firebase.auth.GoogleAuthProvider();
