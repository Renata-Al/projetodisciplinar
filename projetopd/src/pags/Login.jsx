import React from "react";
import '../style/login.css'
import loginlogo from '../imagens/if-lateralnormal.png'

const Login=()=>{
    return(
        <div className="main-login">
        <form className="form-login">
            <div className="container-login">
                <img className="logologin" src={loginlogo}></img>
                <h3 className="titulo">Login</h3>
                <hr color="#d9d9d9" height="1px"></hr>
    
                <label className="full-width">Usuário:<input type="text" required></input></label>
                <label className="full-width"> Senha:<input type="text" required></input></label>
                
                <div class="button-container"> 
                    <button type="submit">Login</button>
                    <button type="submit">Cancelar</button>
                </div>
                <div id="container-forget">
                <p>Esqueceu senha? </p>
                <button type="submit" id="butao">Recuperar senha</button>
                </div>
            </div>
            
        </form>
        <p id="edit">Copyright © 2025 - Renata Albuquerque. IFAM - Campus Iranduba</p>
    </div>
    );
};

export default Login;