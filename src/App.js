import { useState } from 'react';
//import './App.css';
import Paths from './Components/paths'
import {
  BrowserRouter,
} from "react-router-dom";
// import your route components too
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js"


  
function App() {
  const [isAutenticate, setAutenticate]=useState(null)
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAutenticate(user)
    } else {
      setAutenticate(null)
    }
  });
  return (
    <div>
      <BrowserRouter><Paths isAutenticate={isAutenticate} /></BrowserRouter>
    </div>
     
  );
}

export default App;