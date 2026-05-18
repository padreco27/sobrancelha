import React from 'react';

const Highlights = () => (
  <section className="section diferenciais" style={{ padding: '80px 0', background: 'var(--white)' }}>
    <div className="container">
      <div className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Meus Diferenciais</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>O que torna o atendimento no meu espaço uma experiência única de autocuidado.</p>
      </div>
      <div className="diferenciais-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '30px',
        textAlign: 'center'
      }}>
        <div className="diferencial-item" style={{ 
          padding: '40px 30px', 
          background: 'var(--bg-light)', 
          borderRadius: '16px',
          boxShadow: '0 10px 35px rgba(0,0,0,0.03)',
          transition: 'transform 0.3s ease',
          border: '1px solid rgba(212, 175, 55, 0.05)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <i className="fas fa-hand-holding-heart" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px', display: 'block' }}></i>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)', marginBottom: '12px' }}>Trabalho Humanizado</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Respeitando o que você tem a me oferecer, melhorando e realçando o que você já tem de melhor.</p>
        </div>
        
        <div className="diferencial-item" style={{ 
          padding: '40px 30px', 
          background: 'var(--bg-light)', 
          borderRadius: '16px',
          boxShadow: '0 10px 35px rgba(0,0,0,0.03)',
          transition: 'transform 0.3s ease',
          border: '1px solid rgba(212, 175, 55, 0.05)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <i className="fas fa-star" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px', display: 'block' }}></i>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)', marginBottom: '12px' }}>Técnicas Atualizadas</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Sempre buscando te entender e fazer o melhor resultado com as técnicas mais modernas do mercado.</p>
        </div>

        <div className="diferencial-item" style={{ 
          padding: '40px 30px', 
          background: 'var(--bg-light)', 
          borderRadius: '16px',
          boxShadow: '0 10px 35px rgba(0,0,0,0.03)',
          transition: 'transform 0.3s ease',
          border: '1px solid rgba(212, 175, 55, 0.05)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <i className="fas fa-spa" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px', display: 'block' }}></i>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)', marginBottom: '12px' }}>Tempo de Qualidade</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Mais do que fazer um serviço e cuidar de si, é tirar um momento exclusivo de paz e bem-estar para você.</p>
        </div>

        <div className="diferencial-item" style={{ 
          padding: '40px 30px', 
          background: 'var(--bg-light)', 
          borderRadius: '16px',
          boxShadow: '0 10px 35px rgba(0,0,0,0.03)',
          transition: 'transform 0.3s ease',
          border: '1px solid rgba(212, 175, 55, 0.05)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <i className="fas fa-user-check" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px', display: 'block' }}></i>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)', marginBottom: '12px' }}>Serviço Individual</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Um atendimento único, planejado de forma totalmente personalizada para a sua harmonia facial.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
