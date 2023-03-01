import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyA8DYbPhKqpEAP4HcOej1BXYLhGIpicwmw",
    authDomain: "fb-clone-react-a87e8.firebaseapp.com",
    projectId: "fb-clone-react-a87e8",
    storageBucket: "fb-clone-react-a87e8.appspot.com",
    messagingSenderId: "349248743355",
    appId: "1:349248743355:web:ef8c51b16bbceca162c69e",
    measurementId: "G-1N78JHZ248"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();
export{db,auth,storage,functions};