import React from 'react';

const Solution = () => (
    <section className="section solucao" style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
            <div className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Sua Beleza Única e Natural</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Muito além de um procedimento, ofereço um momento único de autocuidado e reconexão com a sua autoestima.
                </p>
            </div>
            <div className="solucao-content">
                <div className="cards-solucao" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '30px' 
                }}>
                    <div className="card-solucao" style={{ 
                        padding: '40px 30px', 
                        background: 'var(--bg-light)', 
                        borderRadius: '16px', 
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                        border: '1px solid rgba(212, 175, 55, 0.05)'
                    }}>
                        <i className="fas fa-heart" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px', display: 'block' }}></i>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'var(--text-color)' }}>Acolhimento Individual</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Um atendimento respeitoso e humano. Aqui, eu ouço o que você quer e busco te entender para fazer o melhor por você.
                        </p>
                    </div>
                    <div className="card-solucao" style={{ 
                        padding: '40px 30px', 
                        background: 'var(--bg-light)', 
                        borderRadius: '16px', 
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                        border: '1px solid rgba(212, 175, 55, 0.05)'
                    }}>
                        <i className="fas fa-sparkles" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px', display: 'block' }}></i>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'var(--text-color)' }}>Harmonia Natural</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Sem padrões artificiais. O foco é respeitar a sua simetria natural e realçar com sutileza a expressividade do seu olhar.
                        </p>
                    </div>
                    <div className="card-solucao" style={{ 
                        padding: '40px 30px', 
                        background: 'var(--bg-light)', 
                        borderRadius: '16px', 
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                        border: '1px solid rgba(212, 175, 55, 0.05)'
                    }}>
                        <i className="fas fa-coffee" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px', display: 'block' }}></i>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'var(--text-color)' }}>Tempo de Qualidade</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Um momento só seu. Venha realizar o seu procedimento em um ambiente tranquilo para você relaxar e se mimar.
                        </p>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <a 
                        href="https://api.whatsapp.com/send/?phone=5531971726124&text=Olá! Gostaria de agendar um momento de autocuidado com a Daline.&type=phone_number&app_absent=0&utm_source=ig" 
                        className="btn-gold"
                        style={{ display: 'inline-block', padding: '16px 35px' }}
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Reservar Meu Horário
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Solution;
