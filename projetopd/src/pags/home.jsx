import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/home.css'
import logo from '../imagens/logovertical.png'
import CAE from '../imagens/CAE.png'

const Home=()=>{
      const [abrirmenu, setabrirmenu] = useState(null);
            
              const Menu = (menu) => {
                setabrirmenu(abrirmenu === menu ? null : menu);
              }; // função para abrir o menu
            
              const CloseMenu = () => {
                setabrirmenu(null);
              }; // função para fechar o menu
    return(
        <div>
        <div className="main">
        <div className="main-container">
            <div className="container">
                <h3 id="title">Sistema de Prontuário Disciplinar</h3>
                <hr color="#d9d9d9" height="1px"></hr>
                <input className="pesquisa" type="search" placeholder="Pesquisa"></input>
                <hr></hr>
                <h3 className="sub-titulo">Resultados da Pesquisa</h3>
            </div>
        </div>
        <div className="containei">
            <div>
                <h3 id="title">Informações</h3>
                <hr color="#d9d9d9" height="1px"></hr>
                <div className="container-info">
                <img className="if" src={logo}></img>
                </div>
                <hr></hr>
                <p className="information">A <strong>Coordenação de Acompanhamento ao Educando (CAE)</strong> é responsável pelos processos de organização administrativa que envolvem a coordenação das atividades de ensino, planejamento e orientação, supervisionando e avaliando estas atividades para assegurar a regularidade do desenvolvimento do processo educativo.</p>
                <div className="none">
                    <Link to="/Sobre" onClick={CloseMenu}>
                        <div className="cae-div">
                            <img className="imgcae" src={CAE}></img>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Home;