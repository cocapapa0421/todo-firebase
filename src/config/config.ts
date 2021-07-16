import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADsj8ffSWb9CPOj-gH0p37vFnw7DO9T64",
  authDomain: "todoapp-ae180.firebaseapp.com",
  projectId: "todoapp-ae180",
  storageBucket: "todoapp-ae180.appspot.com",
  messagingSenderId: "846048091861",
  appId: "1:846048091861:web:5bc309202061df77bd4c5c",
  measurementId: "G-PQE7PQB33C",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.database();
export default db;
