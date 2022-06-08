import "../authenticated/Allnotes.css"
import add from "../authenticated/add.png"
import editBtn from "../authenticated/edit.png"
import deletebtn from "../authenticated/delete.png"
import exit from "../authenticated/exit.png"
//import { WriteNotes } from "./writeNotes"
import { Link } from 'react-router-dom'
import { auth } from "../../lib/firebaseConfig";
import { db } from "../../lib/firebaseConfig"
import React, { useState, useEffect } from 'react'
import {
    collection,
    query,
    onSnapshot,
    deleteDoc,
    doc,
    orderBy,
  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js'

  /*const Show = () => {
    //1 - configuramos los hooks
    const [products, setProducts] = useState( [] )
  
    //2 - referenciamos a la DB firestore
    const productsCollection = collection(db, "products")
  
    //3 - Funcion para mostrar TODOS los docs
    const getProducts = async ()   => {
     const data = await getDocs(productsCollection)
     //console.log(data.docs)
     setProducts(
         data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
     )
     //console.log(products)
    }
    useEffect( () => {
      getProducts()
      // eslint-disable-next-line
    }, [] )
  }
  
  function AllNotes ({logout}){
      
      return (
          <section className="allNotes">
              <div className="header">
              <Link to="/WriteNotes">
              <button type="button" className="addBtn"><img src={add} alt=""/></button>
              </Link>
              <button onClick={()=>{logout()}} className="btnExit"><img src={exit} alt=""/></button>
              </div>
              <div className="containerAllnotes">
              </div>
           </section>
          )
  }
  */

function AllNotes({logout}) {

    const [notes, setTitle] = useState([]);
    useEffect(() => {
      console.log(auth.currentUser.email)
      const q = query(collection(db, "notes"), orderBy('timestamp', 'desc'));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let todosArray = [];
        querySnapshot.forEach((doc) => {
          if(doc.data().email===auth.currentUser.email){
            todosArray.push({...doc.data(), id: doc.id });
          } 
        });
        setTitle(todosArray);
      });
      return () => unsub();
    }, []);

    const deleteNote = async (id) => {
        await deleteDoc(doc(db, "notes", id));
      };
    return(
        <section className="allNotes">
              <div className="header">
              <Link to="/WriteNotes">
              <button type="button" className="addBtn"><img src={add} alt=""/></button>
              </Link>
              <button onClick={()=>{logout()}} className="btnExit"><img src={exit} alt=""/></button>
              </div>
         <div className="containerNotesa" >    
        <div className="containerAllNotes">
        {notes.map((note) => (
            <div className='containerBorderShowNote'>
            <div className='containerShowNote'>
             <div key={note.id} className="noteShowText">
              <h1>{note.title}</h1>
              <p>{note.note}</p>
              
              </div> 
              <footer>
              <button className="btnDelete" onClick={() => deleteNote(note.id)} ><img src={deletebtn} alt=""/></button>
              <Link to={`/editNotes/${note.id}`}>
              <button type="button" className="btnEdit"><img src={editBtn} alt=""/></button>
              </Link>
              </footer>
              </div>
     </div>
     )) }
     </div>
     </div>
     </section>
    )
        
}




export default AllNotes;