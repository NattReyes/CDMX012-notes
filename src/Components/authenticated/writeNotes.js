import "../authenticated/Allnotes.css"
import babyyoda from "../authenticated/babyyoda.png"

export const WriteNotes = () =>
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
}

export default WriteNotes;

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