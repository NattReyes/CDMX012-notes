import "../authenticated/Allnotes.css"
import add from "../authenticated/add.png"
import exit from "../authenticated/exit.png"
//import { WriteNotes } from "./writeNotes"
import { Link } from 'react-router-dom'

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

export default AllNotes;