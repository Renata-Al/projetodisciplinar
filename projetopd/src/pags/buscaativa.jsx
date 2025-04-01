import React from "react";
import '../style/busca.css'

const BuscaAtiva=()=>{
    return(
        <div className="main-contai">
        <form>
            <div className="containe">
                <h3 className="titulo">Busca Ativa</h3>
                <hr color="#d9d9d9" height="1px"></hr>
                
                <label>Aluno:<input type="text" required></input></label>
                <label>Matricula:<input type="text" required></input></label>
                <label>Data:<input type="date"></input></label>

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
                
                <label>Numero de Telefone:<input type="text" required></input></label>
                <label>E-mail:<input type="text" required></input></label>
                <label className="full-width">Endereço:<input type="text"></input></label>

                <label class="full-width"> 
                    Justificativa:<textarea></textarea>
                </label>

                
                <div class="button-container"> 
                    <button type="submit">Salvar</button>
                    <button type="submit">Alterar</button>
                    <button type="submit">Cancelar</button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default BuscaAtiva;