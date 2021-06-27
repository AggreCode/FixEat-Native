import firebase from 'firebase'

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyBr1Qf-zXi4w7mgxT3SZAxzlPN6Hr0vuQc",
    authDomain: "tzomato-d956e.firebaseapp.com",
    // databaseURL: "https://tzomato-d956e-default-rtdb.firebaseio.com/",
    projectId: "tzomato-d956e",
    storageBucket: "tzomato-d956e.appspot.com",
    messagingSenderId: "921453533985",
    appId: "1:921453533985:web:97446c67f9cb8a6747bc60",
    measurementId: "G-9LERE412XN"
  }) ;
  const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
