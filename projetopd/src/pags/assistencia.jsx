import React from "react";
import '../style/assistencia.css'


const Assistencia=()=>{
    return(
        <div className="main-cont">
            <form className="form-alt">
        <div className="containe">
        <h3 className="titulo">Questionário Socioeconômico</h3>
        <hr color="#d9d9d9" height="1px"></hr>
            <div class="form-group">
                <label for="data">1. Data de preenchimento:</label>
                <input type="date" id="data" name="data" class="input-campo"/>
            </div>
            
            <div class="form-group">
                <label for="matricula">2. Número de matrícula:</label>
                <input type="text" id="matricula" name="matricula" class="input-campo" required/>
            </div>
            
            <div class="form-group">
                <label>3. Você ou sua família possui inscrição no CadÚnico do Governo Federal?</label>
                <div class="radio-group">
                    <input type="radio" id="cadunico_sim" name="cadunico" value="sim" class="input-radio"/>
                    <label for="cadunico_sim">Sim</label>
                    <input type="radio" id="cadunico_nao" name="cadunico" value="nao" class="input-radio"/>
                    <label for="cadunico_nao">Não</label>
                </div>
            </div>
            
            <div class="form-group">
                <label for="nis">4. Caso possua inscrição, indique o Número de Inscrição Social (NIS):</label>
                <input type="text" id="nis" name="nis" maxlength="100" class="input-campo"/>
            </div>
            
            <div class="form-group">
                <label>5. Você ou sua família recebe benefício do Programa Bolsa Família?</label>
                <div class="radio-group" required>
                    <input type="radio" id="bolsa_familia_sim" name="bolsa_familia" value="sim" class="input-radio"/>
                    <label for="bolsa_familia_sim">Sim</label>
                    <input type="radio" id="bolsa_familia_nao" name="bolsa_familia" value="nao" class="input-radio"/>
                    <label for="bolsa_familia_nao">Não</label>
                </div>
            </div>
            
            <div class="form-group">
                <label for="valor_bolsa">6. Caso receba benefício, informe o valor:</label>
                <input type="number" id="valor_bolsa" name="valor_bolsa" step="0.01" class="input-campo"/>
            </div>

            <div class="form-group">
                <label>7. Sexo:</label>
                <div class="radio-group">
                <input type="radio" id="feminino" name="sexo" value="feminino"/>
                <label for="feminino">Feminino</label>
                <input type="radio" id="masculino" name="sexo" value="masculino"/>
                <label for="masculino">Masculino</label>
                <input type="radio" id="outros" name="sexo" value="outros"/>
                <label for="outros">Outros</label>
                </div>
            </div>

            <div class="form-group">
                <label>8. Identidade de Gênero:</label>
                <div class="radio-group">
                <input type="radio" id="homem_trans" name="genero" value="homem_trans"/>
                <label for="homem_trans">Homem transgênero</label>
                <input type="radio" id="mulher_trans" name="genero" value="mulher_trans"/>
                <label for="mulher_trans">Mulher transgênero</label>
                <input type="radio" id="homem_transex" name="genero" value="homem_transex"/>
                <label for="homem_transex">Homem transexual</label>
                <input type="radio" id="mulher_transex" name="genero" value="mulher_transex"/>
                <label for="mulher_transex">Mulher transexual</label>
                <input type="radio" id="cisgenero" name="genero" value="cisgenero"/>
                <label for="cisgenero">Cisgênero</label>
                <input type="radio" id="nao_responde" name="genero" value="nao_responde"/>
                <label for="nao_responde">Prefiro não responder</label>
                </div>
            </div>

            <div class="form-group">
                <label for="curso">9. Curso:</label>
                <input type="text" id="curso" name="curso"/>
            </div>
            
            <div class="form-group">
                <label for="religiao">10. Qual a sua religião?</label>
                <input type="text" id="religiao" name="religiao"/>
            </div>

            <div class="form-group">
                <label>11. Qual a sua cor/etnia:</label>
                <div class="radio-group">
                <input type="radio" id="amarela" name="etnia" value="amarela"/>
                <label for="amarela">Amarela</label>
                <input type="radio" id="branca" name="etnia" value="branca"/>
                <label for="branca">Branca</label>
                <input type="radio" id="parda" name="etnia" value="parda"/>
                <label for="parda">Parda</label>
                <input type="radio" id="preta" name="etnia" value="preta"/>
                <label for="preta">Preta</label>
                <input type="radio" id="quilombola" name="etnia" value="quilombola"/>
                <label for="quilombola">Quilombola</label>
                <input type="radio" id="indigena" name="etnia" value="indigena"/>
                <label for="indigena">Indígena</label>
                </div>
            </div>

            <div class="form-group">
                <label for="etnia_indigena">12. Qual a sua etnia, caso autodeclara-se indígena?</label>
                <input type="text" id="etnia_indigena" name="etnia_indigena"/>
            </div>

            <div class="form-group">
                <label for="ano_ingresso">13. Ano de Ingresso no IFAM:</label>
                <select id="ano_ingresso" name="ano_ingresso">
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="outro">Outro</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="nome_aluno">14. Nome do(a) aluno(a):</label>
                <input type="text" id="nome_aluno" name="nome_aluno"/>
            </div>
            
            <div class="form-group">
                <label for="cpf">15. CPF:</label>
                <input type="text" id="cpf" name="cpf"/>
            </div>
            
            <div class="form-group">
                <label for="telefone">16. Telefone (celular):</label>
                <input type="text" id="telefone" name="telefone"/>
            </div>

            <div class="form-group">
                <label for="email">17. E-mail:</label>
                <input type="email" id="email" name="email"/>
            </div>

            <div class="form-group">
                <label for="data_nascimento">18. Data de nascimento:</label>
                <input type="date" id="data_nascimento" name="data_nascimento"/>
            </div>

            <div class="form-group">
                <label for="responsavel_legal">19. Responsável Legal:</label>
                <input type="text" id="responsavel_legal" name="responsavel_legal"/>
            </div>
            
            <div class="form-group">
                <label for="moradia_diferente">20. Caso você seja de outro município, informe o tempo de residência e detalhes:(ex.: moro na cidade há 1 ano. Morava na cidade de Manaus/AM. Moro com parentes, em casa alugada, cedida, etc.)</label>
                <textarea id="moradia_diferente" name="moradia_diferente"></textarea>
            </div>
            
            <div class="form-group">
                <label for="responsavel_pedagogico">21. Responsável pedagógico - nome e parentesco. (responsável pelo acompanhamento escolar da(o) estudante menor de 18 anos):</label>
                <input type="text" id="responsavel_pedagogico" name="responsavel_pedagogico"/>
            </div>

            <div class="form-group">
                <label>22. Qual a sua situação de moradia atual:</label>
                <div class="radio-group">
                <input type="radio" id="casa_propria" name="moradia_atual" value="casa_propria"/>
                <label for="casa_propria">Casa própria</label>
                <input type="radio" id="casa_alugada" name="moradia_atual" value="casa_alugada"/>
                <label for="casa_alugada">Casa alugada</label>
                <input type="radio" id="casa_cedida" name="moradia_atual" value="casa_cedida"/>
                <label for="casa_cedida">Casa cedida</label>
                <input type="radio" id="outros" name="moradia_atual" value="outros"/>
                <label for="outros">Outros</label>
                </div>
            </div>
            
            <div class="form-group">
                <label for="valor_moradia">23. Em caso de imóvel alugado ou prestação, qual o valor mensal?</label>
                <input type="number" id="valor_moradia" name="valor_moradia"/>
            </div>
            <div class="form-group">
            <label for="pension_value">24. Caso você tenha respondido "Outros" na pergunta 22, especifique a situação de moradia atual?</label>
            <input type="number" id="pension_value" name="pension_value" class="input-campo"/>
        </div>
        <div class="form-group">
            <label for="situacao_dos_pais">25. Qual seu estado civil?</label>
            <select id="situacao_dos_pais" name="situacao_dos_pais" class="input-campo">
                <option value="selecao">Selecione</option>
                <option value="casados">Soltero(a)</option>
                <option value="separados">Casado(a)</option>
                <option value="pai_falecido">Divorciado(a)</option>
                <option value="mae_falecida">Vive com companheiro (a)</option>
                <option value="outros">Outros</option>
            </select>
        </div>
        <div class="form-group">
            <label for="situacao_dos_pais">26. Qual o estado civil dos seus pais?</label>
            <select id="situacao_dos_pais" name="situacao_dos_pais" class="input-campo">
                <option value="selecao">Selecione</option>
                <option value="casados">Casados</option>
                <option value="separados">Separados</option>
                <option value="pai_falecido">Pai falecido</option>
                <option value="mae_falecida">Mãe falecida</option>
                <option value="outros">Outros</option>
            </select>
        </div>



            <div class="form-group">
            <label for="pension_value">27. No caso de pais separados, você, seus irmãos, seu pai ou sua mãe recebem pensão alimentícia? Em caso positivo, informe o valor:</label>
            <input type="number" id="pension_value" name="pension_value" class="input-campo"/>
        </div>

       
        <div class="form-group">
            <label for="num_filhos">28. Você tem filho(s)? Em caso positivo, informe a quantidade de filhos:</label>
            <input type="number" id="num_filhos" name="num_filhos" class="input-campo"/>
        </div>

       
        <div class="form-group">
            <label for="child_support">29. Você paga pensão alimentícia a filhos ou ex-cônjuge? Em caso positivo, informe o valor:</label>
            <input type="number" id="child_support" name="child_support" class="input-campo"/>
        </div>

       
        <div class="form-group">
            <label for="form_ingress">30. Qual a sua forma de ingresso no IFAM?</label>
            <select id="form_ingress" name="form_ingress" class="input-campo">
                <option value="R1">R1 PPI - Pretos, Pardos, Indígenas egressos de escola pública com renda familiar bruta mensal de um salário-mínimo per capita.</option>
                <option value="R2">R2 Q - Quilombolas egressos de escolas públicas com renda familiar bruta mensal de um salário-mínimo per capita.</option>
                <option value="R3">R3 PCD - Pessoa com Deficiência egressos de escola pública com renda familiar bruta mensal de um salário-mínimo per capita.</option>
                <option value="R4">R4 EP - Egresso de Escola Pública com renda familiar bruta mensal de um salário-mínimo per capita.</option>
                <option value="R5">R5 PPI - Pretos, Pardos, Indígenas egressos de escola pública independente de renda.</option>
                <option value="R6">R6 Q - Quilombolas egressos de escola pública independente de renda.</option>
                <option value="R7">R7 PCD - Pessoa com Deficiência egressos de escola pública independente de renda.</option>
                <option value="R8">R8 EP - Egressos de Escola Pública independente de renda.</option>
                <option value="PR">PR - Produtor Rural</option>
                <option value="AC">AC - Ampla Concorrência</option>
                <option value="TRANSFER">TRANSFERÊNCIA FACULTATIVA</option>
                <option value="DIPLOMA">PORTADOR DE DIPLOMA</option>
            </select>
        </div>

        <div class="form-group">
            <label for="disability">31. Se você possui alguma deficiência, descreva-a:</label>
            <textarea id="disability" name="disability" class="textarea-campo"></textarea>
        </div>

        <div class="form-group">
            <label for="health_condition">32. Se você possui alguma doença, condição de saúde, alergias e/ou uso de medicamentos contínuos, descreva:</label>
            <textarea id="health_condition" name="health_condition" class="textarea-campo"></textarea>
        </div>

        
        <div class="form-group">
            <label for="transport">33. Qual ou quais meios de transporte você utiliza para frequentar as aulas no Campus?</label>
            <div class="checkbox-group">
                <input type="checkbox" id="transporte_ape" name="transport[]" value="ape" class="input-checkbox"/>
                <label for="transporte_ape">A pé</label>
                <input type="checkbox" id="transporte_carona" name="transport[]" value="carona" class="input-checkbox"/>
                <label for="transporte_carona">Carona</label>
                <input type="checkbox" id="transporte_bike" name="transport[]" value="bike" class="input-checkbox"/>
                <label for="transporte_bike">Bicicleta</label>
                <input type="checkbox" id="transporte_bus" name="transport[]" value="bus" class="input-checkbox"/>
                <label for="transporte_bus">Transporte Coletivo/Ônibus</label>
                <input type="checkbox" id="transporte_proprio" name="transport[]" value="proprio" class="input-checkbox"/>
                <label for="transporte_proprio">Transporte próprio (carro ou moto)</label>
                <input type="checkbox" id="transporte_moto_taxi" name="transport[]" value="moto_taxi" class="input-checkbox"/>
                <label for="transporte_moto_taxi">Moto-táxi</label>
                <input type="checkbox" id="transporte_lotacao" name="transport[]" value="lotacao" class="input-checkbox"/>
                <label for="transporte_lotacao">Lotação</label>
                <input type="checkbox" id="transporte_escolar" name="transport[]" value="escolar" class="input-checkbox"/>
                <label for="transporte_escolar">Transporte Escolar do Campus</label>
                <input type="checkbox" id="transporte_outros" name="transport[]" value="outros" class="input-checkbox"/>
                <label for="transporte_outros">Outro</label>
            </div>
        </div>

        
        <div class="form-group">
            <label for="plans">34. Quais os seus planos ao concluir o curso?</label>
            <select id="plans" name="plans" class="input-campo">
            <option value="selecao">Selecione</option>
                <option value="continuar_estudos">Continuar os estudos</option>
                <option value="mercado_trabalho">Ingressar no mercado de trabalho</option>
                <option value="servico_publico">Ingressar no serviço público</option>
                <option value="empreender">Empreender</option>
                <option value="nao_decidiu">Ainda não decidiu</option>
            </select>
        </div>

        
        <div class="form-group">
            <label for="previous_school">35. Antes de estudar no IFAM, você estudava em:</label>
            <select id="previous_school" name="previous_school" class="input-campo">
                <option value="selecao">Selecione</option>
                <option value="escola_publica_municipal">Escola pública municipal</option>
                <option value="escola_publica_estadual">Escola pública estadual</option>
                <option value="escola_publica">Escola pública</option>
                <option value="escola_particular_integral">Escola particular com bolsa integral</option>
                <option value="escola_particular_parcial">Escola particular com bolsa parcial</option>
                <option value="escola_particular_sem_bolsa">Escola particular sem bolsa</option>
            </select>
        </div>

     
        <div class="form-group">
            <label for="renda_familiar">36. Qual a renda familiar per capita? (somatório dos rendimentos de todos os membros residentes com você, excluindo os Benefícios Sociais)</label>
            <select id="renda_familiar" name="renda_familiar" class="input-campo">
                <option value="selecao">Selecione</option>
                <option value="0_05">0 a 0,5 SM</option>
                <option value="05_1">0,5 a 01 SM</option>
                <option value="1_15">01 a 1,5 SM</option>
                <option value="15_25">1,5 a 2,5 SM</option>
                <option value="25_35">2,5 a 3,5 SM</option>
                <option value="maior_35">Maior que 3,5 SM</option>
            </select>
        </div>

        
        <div class="form-group">
            <label for="num_residents">37. Quantas pessoas moram na sua casa (incluindo você)?</label>
            <input type="number" id="num_residents" name="num_residents" class="input-campo"/>
        </div>

        <div class="form-group">
            <label for="grupo_familiar">38. Escreva os nomes de TODAS as pessoas do seu grupo familiar, inclusive o seu nome na seguinte ordem: Nome do membro da família, idade, parentesco, profissão/ocupação, renda mensal (R$). Ex: Maria Jose de Lima, 57 anos, mãe, ensino médio completo, aux. de serviços gerais, R$ 1.100,00 doméstica.</label>
            <textarea id="grupo_familiar" name="grupo_familiar" class="textarea-campo"></textarea>
        </div>

        <div class="form-group">
            <label for="estuda_no_ifam">39. Das pessoas acima citadas, alguma estuda no IFAM? Se sim, identifique seu nome e informe qual curso ela frequenta:</label>
            <textarea id="estuda_no_ifam" name="estuda_no_ifam" class="textarea-campo"></textarea>
        </div>

        <div class="form-group">
            <label for="gasto_combustivel">40. Caso sua família possua gasto mensal com combustível, informe o valor:</label>
            <input type="number" id="gasto_combustivel" name="gasto_combustivel" class="input-campo"/>
        </div>

        <div class="form-group">
            <label for="gastos_utilidades">41. Caso sua família possua gasto mensal com conta de água, energia elétrica e telefone (fixo e celular), informe em separado o valor gasto com cada item:</label>
            <textarea id="gastos_utilidades" name="gastos_utilidades" class="textarea-campo"></textarea>
        </div>

        <div class="form-group">
            <label for="emprestimo_bancario">42. Caso sua família possua gasto mensal com empréstimo bancário, informe o valor:</label>
            <input type="number" id="emprestimo_bancario" name="emprestimo_bancario" class="input-campo"/>
        </div>
        <div class="form-group">
            <label for="gasto_alimentacao">43. Quanto sua família gasta com alimentação?</label>
            <input type="number" id="gasto_alimentacao" name="gasto_alimentacao" class="input-campo"/>
        </div>

        <div class="form-group">
            <label for="gastos_saude">44. Caso sua família possua gastos mensais com farmácia, saúde, seguro (de vida, residencial, veículo, etc), informe o valor gasto com cada item:</label>
            <textarea id="gastos_saude" name="gastos_saude" class="textarea-campo"></textarea>
        </div>

        <div class="form-group">
            <label for="gasto_gas">45. Caso sua família possua gasto mensal com gás, informe o valor:</label>
            <input type="number" id="gasto_gas" name="gasto_gas" class="input-campo"/>
        </div>

        <div class="form-group">
            <label for="gastos_transporte">46. Sua família possui gastos mensais com transporte? Em caso positivo, informe o valor:</label>
            <input type="number" id="gastos_transporte" name="gastos_transporte" class="input-campo"/>
        </div>

        <div class="form-group">
            <label for="gastos_vestuario">47. Sua família possui gastos mensais com vestuário? Em caso positivo, informe o valor:</label>
            <input type="number" id="gastos_vestuario" name="gastos_vestuario" class="input-campo"/>
        </div>

        <div class="form-group">
            <label for="gastos_domestica">48. Sua família possui gastos mensais com empregada doméstica? Em caso positivo, informe o valor:</label>
            <input type="number" id="gastos_domestica" name="gastos_domestica" class="input-campo"/>
        </div>

        <div class="form-group">
            <label for="pcd_doenca_cronica">49. Caso exista algum PCD, doença grave ou crônica em seu núcleo familiar, descreva o nome completo da pessoa, grau de parentesco, doença grave ou crônica e a despesa mensal com este acontecimento e/ou limitação:</label>
            <textarea id="pcd_doenca_cronica" name="pcd_doenca_cronica" class="textarea-campo"></textarea>
        </div>

        <div class="form-group">
            <label for="recurso_pedagogico">50. Você necessita de algum recurso pedagógico adaptado para estudar (PCD)?</label>
            <div class="group">
            <textarea id="recurso_pedagogico" name="recurso_pedagogico" class="textarea-campo"></textarea>
            </div>
        </div>

        <div class="form-group">
            <label for="endereco_candidato">51. Endereço do candidato (de acordo com o comprovante de residência):</label>
            <div class="group">
            <textarea id="endereco_candidato" name="endereco_candidato" class="textarea-campo"></textarea>
            </div>
        </div>

        <div class="form-group">
            <label for="moradia_outros">52. Caso sua situação de moradia seja “Outros”, especifique:</label>
            <div class="group">
            <textarea id="moradia_outros" name="moradia_outros" class="textarea-campo"></textarea>
            </div>
        </div>
        
            </div>
            <div className="button-container">
            <button type="submit">Enviar</button>
            <button type="submit">Cancelar</button>
            </div>
            </form>
        </div>
    );
};

export default Assistencia;