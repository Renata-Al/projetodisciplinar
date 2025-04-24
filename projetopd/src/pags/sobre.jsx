import React from "react";
import '../style/sobre.css'
import foto1 from '../imagens/if.png'
import foto2 from '../imagens/ifblack.png'
import foto3 from '../imagens/if-vertical.png'
import foto4 from '../imagens/ifwhite.png'

const Sobre=()=>{
    return(
        <div class="corpo">
        <h1 id="sobre-title">Sobre CAE</h1>
        <hr></hr>
        <p id="p1">
         A <strong>Coordenação de Acompanhamento ao Educando (CAE)</strong>, é a responsável pelo acompanhamento da vida acadêmica dos discentes. Possui uma equipe multidisciplinar que oferece apoio e acompanhamento ao estudante através de ações que colaborem para o seu desenvolvimento integral, a permanência e o êxito em sua vida acadêmica, pessoal e profissional. Também é setor responsável pelo cumprimento das normas disciplinares da instituição. 
        </p>
        <p id="p2">
        Tendo dentre suas principais atribuições:
        </p>
        <div className="atividades">
        <ol>
            <li>Acompanhar as atividades de orientação educacional, com o auxílio da equipe psicopedagógica;</li>
            <li>Realizar atividades que possibilitam o desenvolvimento de aspectos socioafetivos e positivos no meio estudantil;</li>
            <li>Distribuir e controlar o fornecimento de alimentos aos discentes;</li>
            <li>Apoiar e acompanhar os eventos avaliativos institucionais e de programas/projetos;</li>
            <li>Acompanhar os processos de transferências de alunos e aproveitamento de estudos em conjunto com a equipe multiprofissional;</li>
            <li>Apoiar serviços em nível ambulatorial, com ações de prevenção e proteção à saúde, através da equipe multiprofissional.</li>
        </ol>
        </div>
        <h2 id="twotitle">Prontuário Disciplinar Digital</h2>
        <hr></hr>
        <p id="p1">
         O <strong>Prontúario Disciplinar Digital</strong> é uma plataforma eficiente para registrar, monitorar e gerenciar ocorrências disciplinares, melhorando a comunicação entre servidores, alunos e responsáveis, e promovendo um sistema mais produtivo e seguro.
        </p>
        <h2 id="twotitle">Nossa Equipe</h2>
        <hr></hr>
        <div class="team">
            <div class="team-member">
                <img src={foto1} alt="Renata"></img>
                <p><strong>Renata Albuquerque</strong></p>
                <p>Scrum Master</p>
                <p>s2renataalbuquerque@gmail.com</p>
            </div>
            <div class="team-member">
                <img src={foto2} alt="Lívia"></img>
                <p><strong>Lívia Casanova</strong></p>
                <p>Development Team</p>
                <p>livea@prontuariodisciplinar.com</p>
            </div>
            <div class="team-member">
                <img src={foto3} alt="Jhennyfer"></img>
                <p><strong>Jhennyfer</strong></p>
                <p>Development Team</p>
                <p>jenifer@prontuariodisciplinar.com</p>
            </div>
            <div class="team-member">
                <img src={foto4} alt="Júlio"></img>
                <p><strong>Júlio César</strong></p>
                <p>Development Team</p>
                <p>desouzajuliocesar339@gmail.com</p>
            </div>
        </div>
{/*
        <div class="contact">
            <h2>Contato</h2>
            <p>Para mais informações, entre em contato conosco através do email:</p>
            <p><strong>sandra.duque@ifam.edu.br</strong></p>
        </div>
        */}
    </div>
    );
};

export default Sobre;