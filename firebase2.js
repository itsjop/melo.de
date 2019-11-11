import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
    apiKey: "AIzaSyCksZEEqlY2n80Xi_LU4Z7UNhhpCIorDSA",
    authDomain: "melode-0451.firebaseapp.com",
    databaseURL: "https://melode-0451.firebaseio.com",
    projectId: "melode-0451",
    storageBucket: "melode-0451.appspot.com",
    messagingSenderId: "569481564780",
    appId: "1:569481564780:web:78dd910fc587a33d"})
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
