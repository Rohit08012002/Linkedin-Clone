import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDsTsOJ5lXUksLARBeMy4_qxP8dKKwGD7A",
  authDomain: "linkedin-clone-yt-41bd0.firebaseapp.com",
  projectId: "linkedin-clone-yt-41bd0",
  storageBucket: "linkedin-clone-yt-41bd0.appspot.com",
  messagingSenderId: "291620526462",
  appId: "1:291620526462:web:deb993e21f16a2965f3b2f"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};