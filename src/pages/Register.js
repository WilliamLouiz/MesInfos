import React from "react";
import Img from "../image/R.png"

function Register() {
  return (
    <div className="formContainer">
        <div className='formWrapper'>
            <span className='logo'>William Chat</span>
            <span className='title'>Registre</span>
            <form>
                <input type='text' placeholder='Votre nom'/>
                <input type='email' placeholder='Votre email'/>
                <input type='password' placeholder='votre mot de passe'/>
                <input style={{display: "none"}} type='file' id="file"/>
                <label htmlFor="file">
                    <img src={Img} alt="" style={{width:30}}/>
                    <span>Ajouter une Image</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>avez vous déjà une compte? Login</p>
        </div>
    </div>
  );
}

export default Register;
