import React from "react";
import '../style/hearder.css'
import logo from '../imagens/ifwhite.png'

function Hearder(){
    return (
        <div className="nav">
            <img className="logo" src={logo}></img>
            <div className="nav-bar">  
            <h2>Prontuário Disciplinar</h2>
            <p>Sistema de Prontuário Disciplinar</p>
        </div>
        <h4>(Login)</h4>
        </div>
    );
};
export default Hearder;