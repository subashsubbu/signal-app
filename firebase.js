// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBRsmAIKvuq-m4PKjq1DJ8D6vz_jXWGIlo",
    authDomain: "signal-app-e99c5.firebaseapp.com",
    projectId: "signal-app-e99c5",
    storageBucket: "signal-app-e99c5.appspot.com",
    messagingSenderId: "907101674121",
    appId: "1:907101674121:web:74e843f4f330c76ef48458",
    measurementId: "G-C0K86S1N79"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}


const db = app.firestore();
const auth = firebase.auth();

export { db, auth };