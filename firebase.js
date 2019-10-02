import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCksZEEqlY2n80Xi_LU4Z7UNhhpCIorDSA",
    authDomain: "melode-0451.firebaseapp.com",
    databaseURL: "https://melode-0451.firebaseio.com",
    projectId: "melode-0451",
    storageBucket: "melode-0451.appspot.com",
    messagingSenderId: "569481564780",
    appId: "1:569481564780:web:78dd910fc587a33d"
});

export const db = firebaseApp.firestore();