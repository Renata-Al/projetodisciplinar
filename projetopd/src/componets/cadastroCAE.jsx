import React from "react";
import '../style/cadastroCAE.css'

const CadastroCAE=()=>{
    return(
        <div className="main-cadastro">
        <form className="form-cadastro">
            <div className="container-cadastro">
                <h3 className="titulo">Cadastro de Agente CAE</h3>
                <hr color="#d9d9d9" height="1px"></hr>
    
                <label className="full-width">Nome Completo:<input type="text" required></input></label>
                <label className="full-width">SIAPE:<input type="text" required></input></label>
                <label className="full-width">Email:<input type="text" required></input></label>            
                {/*<label className="full-width">Campus:<input type="text" required></input></label>*/}
                <label className="full-width">Senha:<input type="password" required></input></label>
                
                <div class="button-container"> 
                    <button type="submit">Cadastrar</button>
                    <button type="submit">Alterar</button>
                    <button type="submit">Cancelar</button>
                </div>
                <div id="container-forget">
                <p>Já tem uma conta?</p>
                <button type="submit" id="butao">Login</button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default CadastroCAE;