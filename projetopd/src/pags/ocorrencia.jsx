import React from "react";
import '../style/ocorrencia.css'

const Ocorrencia=()=>{
    return(
        <div className="main-conta">
            <form>
        <div className="containe">
            <h3 className="titulo">Registro de Ocorrência</h3>
            <hr color="#d9d9d9" height="1px"></hr>
            <label>Aluno(a):<input type="text" required></input></label>
            <label>
                À coordenaçâo do curso de:
                <select name="curso" required>
                    <option value="">Selecione</option>
                    <option value="admin">Administração</option>
                    <option value="info">Informática</option>
                </select>
            </label>
            <label>Data:<input type="date"></input></label>
            <label>Data da Ocorrência:<input type="date" required></input></label>
            <label className="full-width">Local da Ocorrência:
            <select name="local" required>
                    <option value="">Selecione</option>
                    <option value="dentro">Sala de Aula</option>
                    <option value="fora">Fora de Sala de Aula</option>
                    <option value="externo">Imediações externas à escola</option>
                </select>
            </label>
            <label>Envolvidos na Ocorrência:<textarea required></textarea></label>
            <label>Relato da Ocorrência:<textarea required></textarea></label>
            <label className="full-width">Evidências:<input type="file"></input></label>
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

export default Ocorrencia;