// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };


const firebaseConfig = {
  apiKey: "AIzaSyAjQAbgpsNmbpve4RuZURXtvp5xP9Uenj0",
  authDomain: "book-inventory-client.firebaseapp.com",
  projectId: "book-inventory-client",
  storageBucket: "book-inventory-client.appspot.com",
  messagingSenderId: "29908914737",
  appId: "1:29908914737:web:2682def0c14a5fa30a7b10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;