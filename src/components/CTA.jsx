import React from 'react';

const CTA = () => (
    <section className="cta-forte" style={{ background: 'var(--bg-light)', color: 'var(--text-primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Você Merece o Olhar Perfeito</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                Sou Daline Campos, a Rainha das Sobrancelhas, e estou pronta para iniciar a sua jornada de transformação.
            </p>
            <a href="https://api.whatsapp.com/send/?phone=5531971726124&text=Olá! Gostaria de agendar uma avaliação com a Daline&type=phone_number&app_absent=0&utm_source=ig" className="btn-gold">
                Quero Agendar com a Daline
            </a>
        </div>
    </section>
);

export default CTA;
