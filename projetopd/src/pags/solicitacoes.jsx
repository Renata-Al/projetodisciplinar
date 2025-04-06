import React from "react";
import '../style/solicitacoes.css'

const Solicitacoes=()=>{
    return(
        <div className="principal-duvidas">
            <form className="form-alt">
        <div className="containe-duvidas">
            <h3 className="titulo">Solicitações e Dúvidas</h3>
            <label>Discente:<input type="text" required></input></label>
            <label>
                Turma:
                <select name="curso" required>
                    <option value="">Selecione</option>
                    <option value="1anoADM">1º Ano de Administração / Integrado</option>
                    <option value="2anoADM">2º Ano de Administração / Integrado</option>
                    <option value="1anoINFO">1º Ano de Informática / Integrado</option>
                    <option value="2anoINFO">2º ano de Informática / Integrado</option>
                    <option value="3anoINFO">3º Ano de Informática / Integrado</option>
                    <option value="InfoSub">Informática / Subsequente</option>
                    <option value="AdmSub">Administração / Subsequente</option>
                    <option value="SecSub">Secretariado / Subsequente</option>
                    
                </select>
            </label>
            <label>Data:<input type="date"></input></label>
            <label className="full-width">Digite aqui sua solicitação ou dúvida:<textarea required></textarea></label>
            
            <div class="button-container"> 
                    <button type="submit">Enviar</button>
                    <button type="submit">Cancelar</button>
                </div>
        </div>
        </form>
    </div>
    );
};

export default Solicitacoes;