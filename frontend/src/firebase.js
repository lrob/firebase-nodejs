import firebase from "firebase/app";
import "firebase/auth";

const config = require('./firebaseConfig.json');

const firebaseConfig = config

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
