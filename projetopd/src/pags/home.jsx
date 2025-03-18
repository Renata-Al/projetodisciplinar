import React from "react";
import '../style/home.css'

const Home=()=>{
    return(
        <div className="main-container">
            <div className="container">
                <h3 className="titulo">Sistema de Prontuário Disciplinar</h3>
                <hr color="#d9d9d9" height="1px"></hr>
                <input className="pesquisa" type="search" placeholder="Pesquisa"></input>
                <hr color="#2F9E41" height="1px"></hr>
                <h3 className="sub-titulo">Resultados da Pesquisa</h3>
            </div>
        </div>
    );
};

export default Home;