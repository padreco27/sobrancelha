import React from 'react';

const services = [
  { icon: 'fa-eye', title: 'Design de Sobrancelhas', desc: 'Técnica exclusiva para encontrar o formato ideal do seu olhar.', link: 'design de sobrancelhas' },
  { icon: 'fa-leaf', title: 'Recuperação de Fios', desc: 'Tratamento com ativos naturais para preencher falhas e fortalecer.', link: 'tratamento para fios' },
  { icon: 'fa-spa', title: 'Epilação Facial', desc: 'Remoção de pelos faciais com técnica suave e menos dolorosa.', link: 'epilação facial' },
  { icon: 'fa-tint', title: 'Coloração', desc: 'Tintura específica para realçar e dar mais volume às sobrancelhas.', link: 'coloração de sobrancelhas' },
  { icon: 'fa-magic', title: 'Revitalização', desc: 'Hidratação profunda para recuperar o brilho e a saúde dos fios.', link: 'revitalização' },
  { icon: 'fa-hand-holding-heart', title: 'Manutenção', desc: 'Acompanhamento periódico para manter o design perfeito.', link: 'manutenção do design' },
];

const Services = () => (
    <section className="section procedimentos" id="servicos">
        <div className="container">
            <div className="section-title">
                <h2>Nossos Serviços</h2>
                <p>Tudo o que você precisa para transformar o seu olhar e elevar sua autoestima.</p>
            </div>
            <div className="grid-procedimentos">
                {services.map((service, index) => (
                    <div key={index} className="procedimento-card">
                        <div className="procedimento-icon">
                            <i className={`fas ${service.icon}`}></i>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <a 
                            href={`https://api.whatsapp.com/send/?phone=5531971726124&text=Olá! Gostaria de saber mais sobre ${service.link}&type=phone_number&app_absent=0&utm_source=ig`} 
                            className="btn-gold" 
                            style={{ marginTop: '20px', display: 'inline-block', padding: '10px 24px', fontSize: '0.8rem' }}
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Saiba Mais
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Services;
