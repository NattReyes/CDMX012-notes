import { signInWithPopup, GoogleAuthProvider, signOut } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { auth } from './firebaseConfig'

const provider = new GoogleAuthProvider();
export const loginWithGoogle = () =>signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(credential)
    }).catch((error) => {
    console.log(error)
    });
  
export const logout=()=>signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
  });