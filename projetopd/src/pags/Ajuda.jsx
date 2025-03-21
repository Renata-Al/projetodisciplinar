import React from "react";
import '../style/ajuda.css'

const Ajuda=()=>{
    return(
        <div class="corpo">
        <h1>Sobre o Prontuário Disciplinar</h1>
        <hr></hr>
        <p>
         <strong>Prontuário Disciplinar</strong> é uma plataforma desenvolvida para facilitar a gestão e o acompanhamento de processos disciplinares de forma eficiente e transparente. 
        </p>
        <p>
            Nossa plataforma oferece:
        </p>
        <ul>
            <li><strong>   Registros</strong> de ocorrências disciplinares.</li>
            <li><strong>Relatórios</strong> para análise e tomadas de decisões.</li>
            <li><strong>Manuntenção</strong> ---------------------------</li>
        </ul>

        <h2 id="h2">Nossa Equipe</h2>
        <div class="team">
            <div class="team-member">
                <img src="foto1.jpg" alt="Renata"></img>
                <p><strong>Renata </strong></p>
                <p>Scrum Master</p>
                <p>renata@prontuariodisciplinar.com</p>
            </div>
            <div class="team-member">
                <img src="foto2.jpg" alt="Lívia"></img>
                <p><strong>Lívia</strong></p>
                <p>Team-Desenvolvedor</p>
                <p>livea@prontuariodisciplinar.com</p>
            </div>
            <div class="team-member">
                <img src="foto3.jpg" alt="Jhenifer"></img>
                <p><strong>Jhenifer</strong></p>
                <p>Team-Desenvolvedor</p>
                <p>jenifer@prontuariodisciplinar.com</p>
            </div>
            <div class="team-member">
                <img src="foto4.jpg" alt="Júlio"></img>
                <p><strong>Júlio</strong></p>
                <p>Team-Desenvolvedor</p>
                <p>julio@prontuariodisciplinar.com</p>
            </div>
        </div>

        <div class="contact">
            <h2>Contato</h2>
            <p>Para mais informações, entre em contato conosco através do email:</p>
            <p><strong>prontuariodisciplinar@ifiranduba.com</strong></p>
        </div>
    </div>
    );
};

export default Ajuda;