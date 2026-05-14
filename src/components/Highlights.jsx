import React from 'react';

const Highlights = () => (
  <section className="section diferenciais">
    <div className="container">
      <div className="section-title">
        <h2>Nossos Diferenciais</h2>
      </div>
      <div className="diferenciais-grid">
        <div className="diferencial-item">
          <i className="fas fa-leaf"></i>
          <h3>Produtos com Ativos Naturais</h3>
        </div>
        <div className="diferencial-item">
          <i className="fas fa-gem"></i>
          <h3>Técnica Exclusiva</h3>
        </div>
        <div className="diferencial-item">
          <i className="fas fa-heart"></i>
          <h3>Foco na sua Autoestima</h3>
        </div>
        <div className="diferencial-item">
          <i className="fas fa-seedling"></i>
          <h3>Recuperação de Fios</h3>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
