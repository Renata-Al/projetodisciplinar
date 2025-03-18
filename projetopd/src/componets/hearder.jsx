import React from "react";
import '../style/hearder.css'
import logo from '../imagens/if.png'

function Hearder(){
    return (
        <div className="nav-bar">
            <img className="logo" src={logo}></img>
            <h2>Prontuário Disciplinar</h2>
            <p>Sistema de Prontuário Disciplinar</p>
        </div>
    );
};
export default Hearder;