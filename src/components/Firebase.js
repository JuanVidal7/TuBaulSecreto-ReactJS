import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPhwX_zzb6mWfuW0D52RYS_IzM8UzSYzM",
    authDomain: "tubaulsecreto-b3d4e.firebaseapp.com",
    projectId: "tubaulsecreto-b3d4e",
    storageBucket: "tubaulsecreto-b3d4e.appspot.com",
    messagingSenderId: "824756683581",
    appId: "1:824756683581:web:d58abfbf0ca4164c4f3b54"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;