import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/cadastroCAE.css'
import Cadlogo from '../imagens/if-lateralnormal.png'

const CadastroCAE=()=>{
     const [abrirmenu, setabrirmenu] = useState(null);
        
          const Menu = (menu) => {
            setabrirmenu(abrirmenu === menu ? null : menu);
          }; // função para abrir o menu
        
          const CloseMenu = () => {
            setabrirmenu(null);
          }; // função para fechar o menu
    return(
        <div className="main-cadastro">
        <form className="form-cadastro">
            <div className="container-cadastro">
              
              <img className="cadlogin" src={Cadlogo}></img>
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
                <div className="butao">
                <Link to="/Login" onClick={CloseMenu}>
                <h4>(Login)</h4>
                </Link>
              </div>
                </div>
            </div>
        </form>
    </div>
    );
};

export default CadastroCAE;