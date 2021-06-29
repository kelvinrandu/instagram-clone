import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBrKNK1i4AOqJby8QCoWCqRoNYDvmSjMXQ",
    authDomain: "instagram-clone-4c46e.firebaseapp.com",
    projectId: "instagram-clone-4c46e",
    storageBucket: "instagram-clone-4c46e.appspot.com",
    messagingSenderId: "879463132759",
    appId: "1:879463132759:web:f744635fcc268b703fbd12"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export {auth, provider, db, storage}