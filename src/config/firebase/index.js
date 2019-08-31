import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDl2CaH2SaycT5saFmIIQtavLeit9bnJSA",
    authDomain: "simple-notes-firebases.firebaseapp.com",
    databaseURL: "https://simple-notes-firebases.firebaseio.com",
    projectId: "simple-notes-firebases",
    storageBucket: "",
    messagingSenderId: "1007308894631",
    appId: "1:1007308894631:web:c0be085b2ca17a08"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;