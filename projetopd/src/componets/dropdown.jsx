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
      <div className="menu-item" onMouseEnter={() => Menu("home")} onMouseLeave={CloseMenu}>
        Home
        {abrirmenu === "home" && (
          <div className="sub-menu">
            <Link to="/" onClick={CloseMenu}>Menu Principal</Link>
          </div>
        )}
      </div>
      {/* início consulta */}
      <div className="menu-item" onMouseEnter={() => Menu("ocorrencias")} onMouseLeave={CloseMenu}>
        Ocorrências
        {abrirmenu === "ocorrencias" && (
          <div className="sub-menu">
            <Link to="/Disciplinar" onClick={CloseMenu}>Ocorrência Disciplinar</Link>
            <Link to="/Ocorrencia" onClick={CloseMenu}>Registro de Ocorrência</Link>
          </div>
        )}
      </div>
      {/* fim consulta */}
      {/* início atendimento */}
      <div className="menu-item" onMouseEnter={() => Menu("atendimento")} onMouseLeave={CloseMenu}>
        Atendimento
        {abrirmenu === "atendimento" && (
          <div className="sub-menu">
            <Link to="/Atendimento" onClick={CloseMenu}>Atendimento ao Discente</Link>
          </div>
        )}
      </div>
      {/* fim atendimento */}
      {/* início ajuda */}
      <div className="menu-item" onMouseEnter={() => Menu("ajuda")} onMouseLeave={CloseMenu}>
        Ajuda
        {abrirmenu === "ajuda" && (
          <div className="sub-menu">
            <Link to="/Ajuda" onClick={CloseMenu}>Central de Ajuda</Link>
          </div>
        )}
      </div>
      {/* fim ajuda */}
    </div>
  ); // fim return
};

export default Dropdown;