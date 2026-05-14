import React, { useState } from 'react';

const ContactForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    procedimento: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/seuemail@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSuccess();
        setFormData({ nome: '', telefone: '', email: '', procedimento: '', mensagem: '' });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section formulario" id="formulario" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Agende seu Momento</h2>
          <p>Para um atendimento exclusivo, preencha os campos abaixo e entraremos em contato para confirmar seu horário.</p>
        </div>
        <div className="form-container" style={{ borderRadius: '8px', boxShadow: '0 20px 80px rgba(0,0,0,0.05)' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Nome completo</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Ex: Maria Silva" />
            </div>
            <div className="form-group">
              <label style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Telefone / WhatsApp</label>
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required placeholder="(00) 00000-0000" />
            </div>
            <div className="form-group">
              <label style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>E-mail</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="contato@exemplo.com" />
            </div>
            <div className="form-group">
              <label style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Serviço de interesse</label>
              <select name="procedimento" value={formData.procedimento} onChange={handleChange} required style={{ backgroundColor: 'white' }}>
                <option value="">Selecione...</option>
                <option value="design">Design de Sobrancelhas</option>
                <option value="tratamento">Recuperação de Fios</option>
                <option value="epilacao">Epilação Facial</option>
                <option value="coloracao">Coloração</option>
                <option value="outro">Consulta de Avaliação</option>
              </select>
            </div>
            <div className="form-group">
              <label style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Observações</label>
              <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Como podemos te ajudar hoje? (Dúvidas, dia de preferência, etc)"></textarea>
            </div>
            <button type="submit" className="btn-gold" style={{ width: '100%', padding: '18px' }} disabled={loading}>
              {loading ? 'Processando...' : 'Solicitar Atendimento'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
