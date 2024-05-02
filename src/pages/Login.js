import React from "react";
import Img from "../image/face30.png"

function Login() {
  return (
    <div className="formContainer">
        <div className='formWrapper'>
            <span className='logo'>William Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type='email' placeholder='Votre email'/>
                <input type='password' placeholder='votre mot de passe'/>
                <button>Sign in</button>
            </form>
            <p>Vous n'avez pas encore de compte? Registre</p>
        </div>
    </div>
  );
}

export default Login;
