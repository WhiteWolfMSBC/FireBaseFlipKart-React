import  firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
        apiKey: "AIzaSyDuHNFHFYtRF5MX23ews1g4oXFvK46izFs",
        authDomain: "flipkartfirebasereact.firebaseapp.com",
        databaseURL: "https://flipkartfirebasereact-default-rtdb.firebaseio.com/",
        projectId: "flipkartfirebasereact",
        storageBucket: "flipkartfirebasereact.appspot.com",
        messagingSenderId: "189013195368",
        appId: "1:189013195368:web:2041cfe698997bd29a19dd"
      };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }