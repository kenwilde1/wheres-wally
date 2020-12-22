import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCP1zeJuD9h2XpBkHCv_Ir88SYk4N5QWlw",
  authDomain: "where-wally.firebaseapp.com",
  projectId: "where-wally",
  storageBucket: "where-wally.appspot.com",
  messagingSenderId: "23436311981",
  appId: "1:23436311981:web:fdf7d648caf4b856b23524",
  measurementId: "G-16CS8QPT4T",
};

firebase.initializeApp(config);

export default firebase;
