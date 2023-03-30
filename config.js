import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD8AXfHHtmJIJBU4kFU-hWc-8-7_CxgLwU",
  authDomain: "e-ride-f1983.firebaseapp.com",
  projectId: "e-ride-f1983",
  storageBucket: "e-ride-f1983.appspot.com",
  messagingSenderId: "603063554974",
  appId: "1:603063554974:web:416b96ab7288b3a637fc8f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
