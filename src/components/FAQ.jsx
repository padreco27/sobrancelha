import React, { useState } from 'react';

const faqs = [
    {
        question: 'Os produtos utilizados são naturais?',
        answer: 'Sim, nossa linha de tratamento utiliza ativos naturais de alta qualidade, desenvolvidos especificamente para estimular o crescimento e a saúde dos fios das sobrancelhas sem agredir a pele.'
    },
    {
        question: 'Dói fazer o design?',
        answer: 'Nossa técnica de extração é exclusiva e muito mais suave que as convencionais, minimizando o desconforto e evitando vermelhidão excessiva após o procedimento.'
    },
    {
        question: 'Quanto tempo dura o design?',
        answer: 'O tempo de duração varia de acordo com o ciclo de crescimento dos seus fios, mas recomendamos a manutenção a cada 15 ou 20 dias para manter o desenho perfeito.'
    },
    {
        question: 'O tratamento para falhas realmente funciona?',
        answer: 'Sim! Com o uso contínuo da nossa linha de tratamento aliada ao design correto que preserva os fios, é possível recuperar áreas com falhas e obter sobrancelhas mais preenchidas.'
    },
    {
        question: 'Como faço para agendar?',
        answer: 'Você pode agendar pelo nosso WhatsApp clicando nos botões do site, ou preenchendo o formulário de contato no final da página. Nossa equipe retornará rapidamente.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section faq" id="faq">
            <div className="container">
                <div className="section-title">
                    <h2>Dúvidas Frequentes</h2>
                    <p>Entendemos que você quer o melhor para o seu olhar. Respondemos aqui as principais perguntas.</p>
                </div>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                <h3>{faq.question}</h3>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
