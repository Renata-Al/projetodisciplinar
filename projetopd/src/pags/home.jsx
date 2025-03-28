import React from "react";
import '../style/home.css'
import logo from '../imagens/if.png'

const Home=()=>{
    return(
        <div className="main">
        <div className="main-container">
            <div className="container">
                <h3 className="titulo">Sistema de Prontuário Disciplinar</h3>
                <hr color="#d9d9d9" height="1px"></hr>
                <input className="pesquisa" type="search" placeholder="Pesquisa"></input>
                <hr color="#2F9E41" height="1px"></hr>
                <h3 className="sub-titulo">Resultados da Pesquisa</h3>
            </div>
        </div>
        <div className="containei">
            <div>
                <h3 className="titulo">Informações</h3>
                <hr color="#d9d9d9" height="1px"></hr>
                <div className="container-info">
                <img className="if" src={logo}></img>
                </div>
                <hr color="#2F9E41" height="1px"></hr>
                <h3 className="sub-titulo">Resultados da Pesquisa</h3>
            </div>
        </div>
        </div>
    );
};

export default Home;