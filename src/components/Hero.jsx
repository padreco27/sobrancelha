import React from 'react';
import dalineImg from '../assets/daline.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>A sua <span>Rainha das Sobrancelhas</span></h1>
                        <p>Daline Campos Beauty. Encontre o design perfeito que realça a beleza e a expressão natural do seu rosto com a nossa técnica exclusiva.</p>
                        <a href="#formulario" className="btn-gold">Quero Agendar</a>
                    </div>
                    <div className="hero-image">
                        <div className="hero-card">
                            <img src={dalineImg} alt="Daline Campos - Rainha das Sobrancelhas" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
