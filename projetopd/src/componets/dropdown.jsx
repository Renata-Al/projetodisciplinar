import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/dropdown.css";

const Dropdown = () => {
  const [abrirmenu, setabrirmenu] = useState(null);

  const Menu = (menu) => {
    setabrirmenu(abrirmenu === menu ? null : menu);
  }; // função para abrir o menu

  const CloseMenu = () => {
    setabrirmenu(null);
  }; // função para fechar o menu

  return (
    <div className="sidebar">
      {/* Link para o menu principal */}
      <div className="menu-item">
        <Link to="/" onClick={CloseMenu}>
          Home
        </Link>
      </div>
      {/* início consulta */}
      <div className="menu-item" onMouseEnter={() => Menu("ocorrencias")} onMouseLeave={CloseMenu}>
        Ações da CAE
        {abrirmenu === "ocorrencias" && (
          <div className="sub-menu">
            <Link to="/Disciplinar" onClick={CloseMenu}>Ocorrência Disciplinar</Link>
            <Link to="/Ocorrencia" onClick={CloseMenu}>Registro de Ocorrência</Link>
            <Link to="/Atendimento" onClick={CloseMenu}>Atendimento ao Discente</Link>
          </div>
        )}
      </div>
      {/* fim consulta */}
      {/* início atendimento */}
      <div className="menu-item" onMouseEnter={() => Menu("gerenciar")} onMouseLeave={CloseMenu}>
        Gerenciar
        {abrirmenu === "gerenciar" && (
          <div className="sub-menu">
            <Link to="/Gerenciar" onClick={CloseMenu}>Cadastro do Agente</Link>
          </div>
        )}
      </div>
      {/* fim atendimento */}
      {/* fim ajuda */}
      <div className="menu-item">
        <Link to="/Ajuda" onClick={CloseMenu}>
          Sobre
        </Link>
      </div>
    </div>
  ); // fim return
};

export default Dropdown;