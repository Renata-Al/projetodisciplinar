import React from "react";
import '../style/footer.css';
import logo from '../imagens/ifwhite.png'

function Footer() {
  return (
    <footer>
      <img className="logoif" src={logo}></img>
        <div class="footer-section">
            <h4>Dúvidas?</h4>
            <ul>
                <li><a href="#">Perguntas frequentes</a></li>
                <li><a href="#">Fale conosco</a></li>
                <li><a href="#">Suporte</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Info</h4>
            <ul>
                <li><a href="#">Termos e Condições de Uso</a></li>
                <li><a href="#">Aviso de Privacidade</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Contato</h4>
            <p class="footer-address">Rodovia Carlos Braga Km 1, s/n - Zona Rural, Iranduba - AM</p>
            <div class="footer-icons">
                <a href="#">🌐 Página Oficial</a>
                <a href="#">📱 Facebook</a>
                <a href="#">📷 Instagram</a>
            </div>
        </div>
        <div class="copyright">
            Copyright © 2025 - Renata Albuquerque. IFAM - Campus Iranduba
        </div>
    </footer>
  );
}

export default Footer;