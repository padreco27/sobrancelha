import React from 'react';

const Results = () => (
    <section className="section antes-depois" id="antes-depois">
        <div className="container">
            <div className="section-title">
                <h2>Transformações Reais</h2>
                <p>Veja como o nosso Design de Sobrancelhas Especializado eleva a autoestima e realça a beleza natural.</p>
            </div>
            <div className="galeria">
                <div className="galeria-item">
                    <img src="https://images.unsplash.com/photo-1588514930263-644fb2b192ea?q=80&w=600&auto=format&fit=crop" alt="Resultado 1" />
                </div>
                <div className="galeria-item">
                    <img src="https://images.unsplash.com/photo-1520423465871-0866049020b7?q=80&w=600&auto=format&fit=crop" alt="Resultado 2" />
                </div>
                <div className="galeria-item">
                    <img src="https://images.unsplash.com/photo-1620330650961-0738092780e0?q=80&w=600&auto=format&fit=crop" alt="Resultado 3" />
                </div>
                <div className="galeria-item">
                    <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop" alt="Resultado 4" />
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <a href="#formulario" className="btn-gold">Quero minha Transformação</a>
            </div>
        </div>
    </section>
);

export default Results;
