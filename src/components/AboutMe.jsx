import React from 'react';
import dalineImg from '../assets/daline.jpg';

const AboutMe = () => {
  return (
    <section className="section about-me" id="sobre">
      <div className="container">
        <div className="section-title">
          <h2>Quem Sou</h2>
          <p>Conheça a história por trás da Rainha das Sobrancelhas</p>
        </div>
        
        <div className="instagram-card">
          <div className="instagram-video-container">
            <iframe 
              src="https://www.instagram.com/p/DR9iLMaju_m/embed" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              scrolling="no" 
              allowTransparency="true"
              style={{ border: 'none', overflow: 'hidden' }}
            ></iframe>
          </div>
          
          <div className="instagram-content">
            <div className="caption">
              <span className="username">dalinecamposbeauty</span>
              <p>
                <strong>Prazer! Eu sou a Daline Campos</strong>, especialista em sobrancelhas, e hoje quero compartilhar com vocês um pouco da minha história. 💖
                <br /><br />
                Minha jornada no mundo da beleza começou com o desejo de transformar não apenas rostos, mas a autoestima de cada mulher. Ser a <strong>Rainha das Sobrancelhas</strong> em Paraopeba é um título que carrego com muito carinho e responsabilidade.
                <br /><br />
                Cada design é único, cada olhar conta uma história. Minha missão é encontrar a simetria perfeita que realça o que você tem de melhor, usando técnicas que preservam a saúde dos seus fios.
                <br /><br />
                Vamos transformar o seu olhar? ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
