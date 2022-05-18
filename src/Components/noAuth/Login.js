import googleLogo from "../noAuth/google.jpg"
import "../noAuth/Login.css"


function Login({ loginWithGoogle }) {
    return (<section className="firstScreen">
        <button onClick={() => {
            loginWithGoogle();
        } } className="btnLogin">
            <img src={googleLogo} alt="" className="googleLogo"/>
            Login with Google
        </button>
    </section>);
}
 
export default Login;