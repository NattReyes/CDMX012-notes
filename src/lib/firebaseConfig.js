import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import {  getFirestore} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyD65c7xgN_Mt9yTU-d_eKXE_cO288R-WUI",
    authDomain: "super-notes-3bf74.firebaseapp.com",
    projectId: "super-notes-3bf74",
    storageBucket: "super-notes-3bf74.appspot.com",
    messagingSenderId: "843352094684",
    appId: "1:843352094684:web:ffba97a739947551184119",
    measurementId: "G-FPK9TT5PYW"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export let db = getFirestore(app);
