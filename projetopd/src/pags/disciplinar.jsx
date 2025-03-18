import React from "react";
import '../style/disciplinar.css'

const Disciplinar=()=>{
    return(
        <div className="main-containe">
            <form>
        <div className="containe">
            <h3 className="titulo">Registro de Ocorrência Disciplinar</h3>
            <hr color="#d9d9d9" height="1px"></hr>
            <label>Servidor:<input type="text" required></input></label>
            <label>Aluno(s) envolvidos:<input type="text" required></input></label>
            <label>
                Curso:
                <select name="curso" required>
                    <option value="">Selecione</option>
                    <option value="admin">Administração</option>
                    <option value="info">Informática</option>
                </select>
            </label>
            <label>Data:<input type="date"></input></label>
            <label>Data da Ocorrência:<input type="date" required></input></label>
            <label>Hora:<input type="time"></input></label>
            <label>Local da Ocorrência:
            <select name="local" required>
                    <option value="">Selecione</option>
                    <option value="dentro">Sala de Aula</option>
                    <option value="fora">Fora de Sala de Aula</option>
                    <option value="externo">Imediações externas à escola</option>
                </select>
            </label>
            <label>Atitudes Inadequadas do Aluno:<textarea></textarea></label>
            <label>Envolvidos na Ocorrência:<textarea required></textarea></label>
            <label>Relato da Ocorrência:<textarea required></textarea></label>
            <label><input type="file"></input></label>
            <label>Há testemunhas:<input type="text"></input></label>
            <label>Despacho CAE:
            <select name="local" required>
                    <option value="">Selecione</option>
                    <option value="nue">NUE</option>
                    <option value="comissao">Comissão Disciplinar</option>
                </select>
            </label>
            
            <label>Observações:<input type="text"></input></label>
            <button type="submit">Salvar</button>
        </div>
        </form>
    </div>
    );
};

export default Disciplinar;