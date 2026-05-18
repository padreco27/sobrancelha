import React from 'react';

const ContactForm = () => {
  return (
    <section className="section formulario" id="formulario" style={{ backgroundColor: 'var(--bg-light)', textAlign: 'center', padding: '80px 0' }}>
      <div className="container">
        <div className="section-title">
          <h2>Agende seu Momento</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 30px' }}>Para um atendimento exclusivo, entre em contato diretamente pelo WhatsApp. Será um prazer tirar suas dúvidas e encontrar o melhor horário para você.</p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <a 
            href="https://api.whatsapp.com/send/?phone=5531971726124&text=Olá! Gostaria de agendar um horário.&type=phone_number&app_absent=0&utm_source=ig" 
            className="btn-gold" 
            style={{ display: 'inline-flex', alignItems: 'center', padding: '18px 40px', fontSize: '1.1rem', gap: '10px' }}
            target="_blank" 
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp" style={{ fontSize: '1.4rem' }}></i>
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
