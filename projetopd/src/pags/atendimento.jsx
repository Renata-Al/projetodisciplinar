import React from "react";
import '../style/atendimento.css'

const Atendimento=()=>{
    return(
        <div className="main-containe">
            <form>
        <div className="containe">
            <h3 className="titulo">Atendimento ao Discente</h3>
            <hr color="#d9d9d9" height="1px"></hr>
            <label>Discente:<input type="text" required></input></label>
            <label>
                Turma:
                <select name="curso" required>
                    <option value="">Selecione</option>
                    <option value="1anoADM">1º ADM</option>
                    <option value="2anoADM">2º ADM </option>
                    <option value="1anoINFO">1º INFO</option>
                    <option value="2anoINFO">2º INFO</option>
                    <option value="3anoINFO">3º INFO</option>
                    
                </select>
            </label>
            <label>Data:<input type="date"></input></label>
            <label>Motivo:<textarea required></textarea></label>
            <label>Descrição da Ocorrência:<textarea required></textarea></label>
            <label><input type="file"></input></label>
            <button type="submit">Salvar</button>
        </div>
        </form>
    </div>
    );
};

export default Atendimento;