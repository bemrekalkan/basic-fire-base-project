import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDt0vTVc_EY2atyEUnGxdVXeZLpsiWLLiA",
  authDomain: "people-201cb.firebaseapp.com",
  projectId: "people-201cb",
  storageBucket: "people-201cb.appspot.com",
  messagingSenderId: "299528096851",
  appId: "1:299528096851:web:df19367d8e300920aecaa6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
