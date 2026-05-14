import React from 'react';

const benefits = [
  { icon: 'fa-gem', title: 'Técnica Exclusiva', desc: 'Nosso design é pensado milimetricamente para a proporção do seu rosto.' },
  { icon: 'fa-leaf', title: 'Ativos Naturais', desc: 'Linha de tratamento que nutre e acelera o crescimento dos fios.' },
  { icon: 'fa-wine-glass', title: 'Conforto', desc: 'Método de extração mais suave, minimizando o desconforto.' },
  { icon: 'fa-star', title: 'Foco no Natural', desc: 'Realçamos o que você tem de melhor, sem marcações artificiais.' },
  { icon: 'fa-user-check', title: 'Profissionais Especializados', desc: 'Designers altamente capacitados na nossa técnica.' },
  { icon: 'fa-heart', title: 'Autoestima', desc: 'Um olhar poderoso transforma a forma como você se sente.' },
];

const Benefits = () => (
    <section className="section beneficios">
        <div className="container">
            <div className="section-title">
                <h2>Por que nos Escolher?</h2>
                <p>Somos referência na recuperação e transformação do olhar.</p>
            </div>
            <div className="beneficios-grid">
                {benefits.map((benefit, index) => (
                    <div key={index} className="beneficio-item">
                        <div className="beneficio-icon" style={{ background: 'var(--bg-light)', color: 'var(--primary)' }}>
                            <i className={`fas ${benefit.icon}`}></i>
                        </div>
                        <div className="beneficio-text">
                            <h3>{benefit.title}</h3>
                            <p>{benefit.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Benefits;
