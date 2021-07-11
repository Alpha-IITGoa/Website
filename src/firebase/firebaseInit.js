import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCW29HKx4QLQ5KPdL8MFL9XyGMyNCcMgmo",
    authDomain: "alpha-club-iitgoa.firebaseapp.com",
    projectId: "alpha-club-iitgoa",
    storageBucket: "alpha-club-iitgoa.appspot.com",
    messagingSenderId: "166253584171",
    appId: "1:166253584171:web:95e0b85f6c9857714a6f6e",
    measurementId: "G-2DP2HHTMFP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();