import React from "react";
import '../style/hearder.css'
import logo from '../imagens/if.png'

function Hearder(){
    return (
        <div className="nav">
            <img className="logo" src={logo}></img>
            <div className="nav-bar">  
            <h2>Prontuário Disciplinar<h3 className="above">Campus Iranduba</h3></h2>
            <p>Sistema de Prontuário Disciplinar</p>
        </div>
        <h4>(Login)</h4>
        </div>
    );
};
export default Hearder;