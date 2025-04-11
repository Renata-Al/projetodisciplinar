import React from "react";
import '../style/login.css'

const Login=()=>{
    return(
        <div className="main-cadastro">
        <form className="form-cadastro">
            <div className="container-cadastro">
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