import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhW6uUkif563kL8QwfonYVWH522j0dsG4",
  authDomain: "chat-app-91f7e.firebaseapp.com",
  databaseURL: "https://chat-app-91f7e.firebaseio.com",
  projectId: "chat-app-91f7e",
  storageBucket: "chat-app-91f7e.appspot.com",
  messagingSenderId: "189960763216",
  appId: "1:189960763216:web:e6b597b792e79a0ea75e55",
  measurementId: "G-2W41LVK5DR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
