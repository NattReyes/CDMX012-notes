//import "../authenticated/Allnotes.css"
import groot from "../authenticated/babyGroot.png"
import back from "../authenticated/back.png"
import save from "../authenticated/SAVE.jpg"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js'
//import { db } from './firebaseConfig'
//import { db } from '../lib/firebaseConfig.js'
//import {app } from '../lib/firebaseAuth.js'
import { db } from "../../lib/firebaseConfig"
//export const db = getFirestore(app);
import { Link } from 'react-router-dom'

//export const WriteNotes = (db) => {
export function WriteNotes (){
  const [ title, setTitle ] = useState('')
  const [ note, setNote ] = useState('')
  const navigate = useNavigate()
  const productsCollection = collection(db, "notes")

  const saveChanges = async (e) => {
    e.preventDefault()
    await addDoc( productsCollection, { title: title, note: note } )
    navigate('/')
    //console.log(e.target[0].value)
  }

  return (
    <section>
    <div className='containerBorder'>
        <div className='containerNote'>
        <img src={groot} alt="" className="groot"/>
                 <form onSubmit={saveChanges}>
                    <div className='mb-3'>
                        <textarea required 
                            value={title}
                            onChange={ (e) => setTitle(e.target.value)} 
                            type="text"
                            className='titleNote'
                            rows="2" cols="35" 
                            placeholder="Title"
                        />
                    </div>  
                    <div className='mb-3'>
                        <textarea required 
                            value={note}
                            onChange={ (e)=> setNote(e.target.value)} 
                            type="text"
                            className='rememberNote'
                            placeholder="Remember..."
                            rows="9" cols="45" 
                        />                 
                    </div>  
                    <button type='submit' className='btnSave'><img src={save} alt=""/></button>
                 </form>  
                 <Link to="/">
                 <button type='submit' className='btnBack'><img src={back} alt=""/></button>
                 </Link>
        </div>
    </div> 
    </section>
  )
}

/*export const WriteNotes = () =>
{
    return(
        <section>
            <div className="containerBorder">
                <div className="containerNote">
                <img src={babyyoda} alt="" className="yoda"/>
                <input placeholder="Título Recuerda..." type="text" className="note"></input>
                </div>
            </div>
        </section>
    )
}*/

//export default WriteNotes;

/*import {useNavigate} from "react-router-dom";

export const WriteNotes = () =>
{
    const navigate = useNavigate();
    
    const newLocal = () => navigate(-2);
        return(
            <section>
            <button onClick={newLocal}> goBack </button>
            </section>
        )
}*/ 