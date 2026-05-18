import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
                    <div className="hero-text" style={{ margin: '0 auto', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 style={{ textAlign: 'center' }}><span>Rainha das Sobrancelhas</span></h1>
                        <p style={{ textAlign: 'center' }}>Especialista em realçar sua beleza através do olhar, respeitando você e elevando sua autoestima. - Daline Campos Beauty</p>
                        <a href="https://api.whatsapp.com/send/?phone=5531971726124&text=Olá! Gostaria de agendar um horário com a Rainha das Sobrancelhas.&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer" className="btn-gold" style={{ alignSelf: 'center' }}>Quero Agendar</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
