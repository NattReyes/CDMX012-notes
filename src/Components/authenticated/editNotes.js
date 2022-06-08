//import "../authenticated/Allnotes.css"
import groot from "../authenticated/babyGroot.png"
import back from "../authenticated/back.png"
import save from "../authenticated/SAVE.jpg"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, updateDoc, doc} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js'
//import { db } from './firebaseConfig'
//import { db } from '../lib/firebaseConfig.js'
//import {app } from '../lib/firebaseAuth.js'
import { db } from "../../lib/firebaseConfig"
//export const db = getFirestore(app);
import { Link } from 'react-router-dom'

//export const WriteNotes = (db) => {
export function EditNotes (){
  const [ title, setTitle ] = useState('')
  const [ note, setNote ] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault()
    const notesEdit = doc(db, "notes", id)
    const data = {title: title, note: note}
    await updateDoc( notesEdit, data)
    navigate('/')
    //console.log(e.target[0].value)
  }

  const getNoteById = async (id) => {
    const currentNote = await getDoc(doc(db, "notes", id))
    if(currentNote.exists()) {
        console.log(currentNote.data())
        setTitle(currentNote.data().title)    
        setNote(currentNote.data().note)
    }else{
        console.log('La nota no existe')
    }
}

useEffect( () => {
    getNoteById(id)
    // eslint-disable-next-line
}, [])

  return (
    <section>
    <div className='containerBorder'>
        <div className='containerNote'>
        <img src={groot} alt="" className="groot"/>
                 <form onSubmit={update}>
                    <div className='mb-3'>
                        <textarea required 
                            value={title}
                            onChange={ (e) => setTitle(e.target.value)} 
                            type="text"
                            className='titleNote'
                            rows="2" cols="35" 
                        />
                    </div>  
                    <div className='mb-3'>
                        <textarea required 
                            value={note}
                            onChange={ (e)=> setNote(e.target.value)} 
                            type="text"
                            className='rememberNote'
                            rows="9" cols="45" 
                        />                 
                    </div>  
                    <button type='submit' className='btnSave'><img src={save} alt="" /></button>
                 </form>  
                 <Link to="/">
                 <button type='submit' className='btnBack'><img src={back} alt=""/></button>
                 </Link>
        </div>
    </div> 
    </section>
  )
}