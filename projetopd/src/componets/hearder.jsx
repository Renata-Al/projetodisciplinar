import React, { useState } from "react";
import '../style/hearder.css'
import logo from '../imagens/if.png'
import { Link } from "react-router-dom";

function Hearder(){
    const [abrirmenu, setabrirmenu] = useState(null);
    
      const Menu = (menu) => {
        setabrirmenu(abrirmenu === menu ? null : menu);
      }; // função para abrir o menu
    
      const CloseMenu = () => {
        setabrirmenu(null);
      }; // função para fechar o menu
    
    return (
        <div className="nav">
            <img className="logo" src={logo}></img>
            <div className="nav-bar">  
            <h2>Prontuário Disciplinar<h3 className="above">Campus Iranduba</h3></h2>
            <p>Sistema de Prontuário Disciplinar</p>
        </div>
        <div className="menu-login">
                <Link to="/Login" onClick={CloseMenu}>
                <h4>(Login)</h4>
                </Link>
              </div>
        </div>
    );
};
export default Hearder;