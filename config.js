import firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyBrfj9tpfY2UzOzfNgJc3f59GTGfkYMruk",
  authDomain: "book-santa-56c19.firebaseapp.com",
  projectId: "book-santa-56c19",
  storageBucket: "book-santa-56c19.appspot.com",
  messagingSenderId: "66613253158",
  appId: "1:66613253158:web:1ab8334ffb48d00156c2e7"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
