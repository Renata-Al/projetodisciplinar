import React from "react";
import '../style/disciplinar.css'

const Disciplinar=()=>{
    return(
        <div className="main-contai">
        <form className="form-alt">
            <div className="containerr">
                <h3 className="titulo">Registro de Ocorrência Disciplinar</h3>
                <hr color="#d9d9d9" height="1px"></hr>
                
                <label>Servidor:<input type="text" required></input></label>
                <label>Aluno(s) envolvidos:<input type="text" required></input></label>
                <label>Número de matrícula:<input type="text" required></input></label>
                <label>
                    Curso:
                    <select name="curso" required>
                        <option value="">Selecione</option>
                        <option value="admin">Administração</option>
                        <option value="info">Informática</option>
                        <option value="subs-adm">Administração Subsequente</option> 
                    <option value="subs-info">Informática Subsequente</option>
                    <option value="subs-sec">Secretariado Subsequente</option>
                    </select>
                </label>
                
                <label>Data do Registro:<input type="date"></input></label>
                <label>Data da Ocorrência:<input type="date" required></input></label>
                <label>Hora:<input type="time"></input></label>
                
                <label>
                    Local da Ocorrência:
                    <select name="local" required>
                        <option value="">Selecione</option>
                        <option value="dentro">Sala de Aula</option>
                        <option value="fora">Fora de Sala de Aula</option>
                        <option value="externo">Imediações externas à escola</option>
                    </select>
                </label>
                
                <label> 
                    Atitudes Inadequadas do Aluno:<textarea></textarea>
                </label>
                
                <label> 
                    Envolvidos na Ocorrência:<textarea required></textarea>
                </label>
                
                <label class="full-width"> 
                    Relato da Ocorrência:<textarea required></textarea>
                </label>
                
                <label> 
                Evidências:<input type="file"></input>
                </label>
                
                <label>Há testemunhas:<input type="text"></input></label>
                
                <label class="full-width">
                    Despacho CAE:
                    <select name="despacho" required>
                        <option value="">Selecione</option>
                        <option value="nue">NUE</option>
                        <option value="comissao">Comissão Disciplinar</option>
                    </select>
                </label>
                
                <label class="full-width">
                    Observações:<textarea></textarea>
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

export default Disciplinar;