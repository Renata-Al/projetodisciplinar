import React from "react";
import '../style/justificativa.css'

const Justificativa = () =>{
    return(
        <div className="Container-principal">
 <form className="form-alt">
        <div className="containe">
            <h3 className="titulo">Justificativa</h3>
            <hr color="#d9d9d9" height="1px"></hr>
            <label>Discente:<input type="text" required></input></label>
            <label>Número de matrícula:<input type="text" required></input></label>
            <label>Data do Atendimento:<input type="date" required></input></label>
            <label>
                Turma:
                <select name="turma" required>
                    <option value="">Selecione</option>
                    <option value="1anoADM">1º ADM</option>
                    <option value="2anoADM">2º ADM </option>
                    <option value="1anoINFO">1º INFO</option>
                    <option value="2anoINFO">2º INFO</option>
                    <option value="3anoINFO">3º INFO</option>  
                    <option value="subs-adm">Administração Subsequente</option> 
                    <option value="subs-info">Informática Subsequente</option>
                    <option value="subs-sec">Secretariado Subsequente</option>
                </select>
            </label>
           
        </div>
        <div className="div-mid">
            <label id="mid">
            Tipo:
                <select name="forma" required>
                    <option value="">Selecione</option>
                    <option value="falta">Falta</option>
                    <option value="omisso">Caso Omisso</option>
                    <option value="uniforme">Uniforme</option>
                </select>
            </label>
        
            <label>Justificativa:<textarea placeholder="Justifique" required></textarea></label>
            </div>
             
            <div class="button-container"> 
                    <button type="submit">Salvar</button>
                    <button type="submit">Alterar</button>
                    <button type="submit">Cancelar</button>
                </div>
        </form>

        </div>
    );
};
export default Justificativa;