import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// set the database

// config files here
const config={
    apiKey: "AIzaSyAtx-9c8vTWuL_ZiwoUogdT03ESsYJareA",
    authDomain: "rate-it-7d6cb.firebaseapp.com",
    projectId: "rate-it-7d6cb",
    storageBucket: "rate-it-7d6cb.appspot.com",
    messagingSenderId: "908451576049",
    appId: "1:908451576049:web:2b6780383afe735a58d150"
};

const Firebase = firebase.initializeApp(config);

export { Firebase };
