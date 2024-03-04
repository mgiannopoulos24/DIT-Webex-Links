import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBluB8cOgIS6rr71mTtLYS34x2mjKMe3iY",
    authDomain: "dit-webex-links.firebaseapp.com",
    projectId: "dit-webex-links",
    storageBucket: "dit-webex-links.appspot.com",
    messagingSenderId: "841766162125",
    appId: "1:841766162125:web:abf3b435941f9e17636384",

  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
