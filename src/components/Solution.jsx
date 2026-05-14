import React from 'react';

const Solution = () => (
    <section className="section solucao" style={{ background: 'var(--white)' }}>
        <div className="container">
            <div className="section-title">
                <h2>Cuidado Científico e Olhar Artístico</h2>
                <p>Unimos técnica especializada com linhas de tratamento com ativos naturais focados em resultados perfeitos.</p>
            </div>
            <div className="solucao-content">
                <div className="cards-solucao">
                    <div className="card-solucao">
                        <i className="fas fa-magic"></i>
                        <h3>Técnica Exclusiva</h3>
                        <p>Encontramos o design ideal que realça a beleza e a expressão natural do seu rosto.</p>
                    </div>
                    <div className="card-solucao">
                        <i className="fas fa-leaf"></i>
                        <h3>Ativos Naturais</h3>
                        <p>Produtos que recuperam os fios e estimulam o preenchimento de todas as falhas.</p>
                    </div>
                    <div className="card-solucao">
                        <i className="fas fa-face-grin-stars"></i>
                        <h3>Autoestima</h3>
                        <p>Transforme-se também na sua melhor versão com o poder do olhar.</p>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <a href="#formulario" className="btn-gold">Agendar Avaliação</a>
                </div>
            </div>
        </div>
    </section>
);

export default Solution;
