import {
    Routes,
    Route,
} from "react-router-dom";

import AllNotes from "./authenticated/Allnotes.js"
import Login from "./noAuth/Login"
import { loginWithGoogle, logout } from '../lib/firebaseAuth.js'
import { WriteNotes } from "./authenticated/writeNotes.js";
import { EditNotes } from "./authenticated/editNotes.js";
const Paths = ({ isAutenticate }) => {
    return (
        <div>
            {isAutenticate ?
                <Routes>
                    <Route path="/" element={<AllNotes logout={logout} />}>
                    </Route>
                    <Route path="/writeNotes" element={<WriteNotes />}>
                    </Route>
                    <Route path="/editNotes/:id" element={<EditNotes />}>
                    </Route>
                </Routes> :
                <Routes>
                    <Route path="/" element={<Login loginWithGoogle={loginWithGoogle} />}>
                    </Route>
                </Routes>}
        </div>);
}

export default Paths;