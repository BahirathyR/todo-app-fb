
import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyCUbyP-lBAjTBiRzqV9nU9kW2Twogld6R0",
    authDomain: "todo-app-fb-9e515.firebaseapp.com",
    projectId: "todo-app-fb-9e515",
    storageBucket: "todo-app-fb-9e515.appspot.com",
    messagingSenderId: "332565611976",
    appId: "1:332565611976:web:231057ba246b06cb12ecfd",
    measurementId: "G-DHPRJG4S86"

});

const db = firebase.firestore();
export default db;

