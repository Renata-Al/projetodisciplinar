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
      {/* início acoes cae */}
      <div className="menu-item" onMouseEnter={() => Menu("acoes")} onMouseLeave={CloseMenu}>
        Ações da CAE
        {abrirmenu === "acoes" && (
          <div className="sub-menu">
            <Link to="/Atendimento" onClick={CloseMenu}>Atendimento ao Discente</Link>
            <Link to="/BuscaAtiva" onClick={CloseMenu}>Busca Ativa</Link>
            <Link to="/Justificativa" onClick={CloseMenu}>Justificativa</Link>
            <Link to="/Disciplinar" onClick={CloseMenu}>Registro de Ocorrência</Link>
            <Link to="/Solicitacoes" onClick={CloseMenu}>Solicitações e Dúvidas</Link>  
          </div>
        )}
      </div>
      {/* fim acoes cae */}
      {/* início assistencia */}
      <div className="menu-item" onMouseEnter={() => Menu("assistencia")} onMouseLeave={CloseMenu}>
        Assistência ao Discente
        {abrirmenu === "assistencia" && (
          <div className="sub-menu">
            <Link to="/Assistencia" onClick={CloseMenu}>Questionário Socioeconômico</Link>         
          </div>
        )}
         {/* fim assistencia*/}
      </div>
       {/* início consulta */}
      {/* início gerenciar */}
      <div className="menu-item" onMouseEnter={() => Menu("gerenciar")} onMouseLeave={CloseMenu}>
        Gerenciar
        {abrirmenu === "gerenciar" && (
          <div className="sub-menu">
            <Link to="/CadastroCAE" onClick={CloseMenu}>Cadastro do Agente</Link>
          </div>
        )}
      </div>
      {/* fim gerenciar*/}
       {/* início sobre */}
      <div className="menu-item">
        <Link to="/Sobre" onClick={CloseMenu}>
          Sobre
        </Link>
      </div>
       {/*fimm sobre */}
    </div>
  ); // fim return
};

export default Dropdown;