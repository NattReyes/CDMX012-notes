//import supernotes from "../noAuth/supernotes.png"
import "../noAuth/Login.css"


function Login({ loginWithGoogle }) {
    return (<section className="firstScreen">
        <button onClick={() => {
            loginWithGoogle();
        } } className="btnLogin">
            Login with Google
        </button>
    </section>);
}
 
export default Login;