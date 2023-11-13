
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOG972JyzHUdkaTVL8rNR_23IgdHC9U_Y",
  authDomain: "bingeflix-7fafe.firebaseapp.com",
  projectId: "bingeflix-7fafe",
  storageBucket: "bingeflix-7fafe.appspot.com",
  messagingSenderId: "1042894222478",
  appId: "1:1042894222478:web:541b4929414708bc5fc5df",
  measurementId: "G-NXFNQF9ZTQ"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)