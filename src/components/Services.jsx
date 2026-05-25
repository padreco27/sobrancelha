import React from 'react';

// Importando as imagens enviadas pela cliente
import imgDesign from '../assets/service_design_personalizado.jpg';
import imgColoracao from '../assets/service_coloracao.jpg';
import imgBuco from '../assets/service_buco.jpg';
import imgBrow from '../assets/service_brow_lamination.jpg';
import imgMicro from '../assets/service_micropigmentacao.jpg';
import imgMicroTecnicas from '../assets/service_micropigmentacao_tecnicas.jpg';
import imgCta from '../assets/services_cta.png';

const servicesList = [
    {
        title: 'Design de Sobrancelha Personalizado',
        image: imgDesign,
        desc: 'Mapeamento e remoção precisa dos fios fora do desenho natural, respeitando o formato do seu rosto para o máximo de harmonia.',
        link: 'Design Personalizado'
    },
    {
        title: 'Design Personalizado + Coloração',
        image: imgColoracao,
        desc: 'Utiliza tintura própria para realçar os fios, cobrir falhas e destacar os mais claros. Resultado definido e natural por 15 a 20 dias.',
        link: 'Design com Coloração'
    },
    {
        title: 'Design Personalizado + Buço',
        image: imgBuco,
        desc: 'O combo perfeito que harmoniza o seu olhar e remove os pelos indesejados do buço usando cera fria ou linha egípcia.',
        link: 'Design com Buço'
    },
    {
        title: 'Brow Lamination',
        image: imgBrow,
        desc: 'Alinhamento e volume natural. Fios mais maleáveis e alinhados, durando de 40 a 60 dias. Ideal para fios finos ou rebeldes.',
        link: 'Brow Lamination'
    },
    {
        title: 'Micropigmentação',
        image: imgMicro,
        desc: 'Implante de pigmento na camada superficial para preencher falhas e fios escassos. Técnicas: Fios Realísticos, Shadow, Soft Shadow e Híbrida.',
        link: 'Micropigmentação'
    },
    {
        title: 'Micropigmentação (Técnicas)',
        image: imgMicroTecnicas,
        desc: 'Conheça o resultado real das nossas quatro técnicas exclusivas e escolha a ideal para o seu estilo de olhar.',
        link: 'Técnicas de Micropigmentação'
    }
];

const Services = () => (
    <section className="section procedimentos" id="servicos" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
            <div className="section-title" style={{ marginBottom: '50px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Meus Serviços</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto' }}>Clique nas transformações reais abaixo para saber mais e agendar o seu momento de autocuidado.</p>
            </div>

            <div className="grid-procedimentos" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '40px',
                marginTop: '20px'
            }}>
                {servicesList.map((service, index) => (
                    <div key={index} className="procedimento-card" style={{ 
                        background: 'var(--white)', 
                        borderRadius: '16px', 
                        overflow: 'hidden', 
                        boxShadow: '0 15px 45px rgba(0,0,0,0.06)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        border: '1px solid rgba(212, 175, 55, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 25px 60px rgba(212, 175, 55, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 15px 45px rgba(0,0,0,0.06)';
                    }}
                    >
                        <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100%', backgroundColor: '#fcf8f2' }}>
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                style={{ 
                                    position: 'absolute', 
                                    top: 0, 
                                    left: 0, 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }} 
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                        <div style={{ padding: '25px', textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '12px', fontWeight: '600' }}>{service.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px', minHeight: '72px' }}>{service.desc}</p>
                            <a 
                                href={`https://api.whatsapp.com/send/?phone=5531971726124&text=Olá! Gostaria de agendar ou saber mais sobre o procedimento: ${service.link}.&type=phone_number&app_absent=0&utm_source=ig`}
                                className="btn-gold" 
                                style={{ display: 'inline-block', width: '100%', padding: '12px 0', fontSize: '0.9rem', letterSpacing: '1px' }}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Agendar no WhatsApp
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Banner de CTA com a imagem Rosa Campos */}
            <div className="services-cta" style={{ 
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '40px',
                marginTop: '80px', 
                padding: '40px', 
                background: 'var(--white)', 
                borderRadius: '20px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                border: '1px solid rgba(212, 175, 55, 0.15)'
            }}>
                <div style={{ maxWidth: '350px', width: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <img src={imgCta} alt="Sua Jornada na Beleza" style={{ width: '100%', display: 'block' }} />
                </div>
                <div style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '10px' }}><em>Todas as imagens acima foram transformações reais.</em></p>
                    <h3 style={{ color: 'var(--text-color)', fontSize: '2rem', marginBottom: '15px', fontFamily: 'var(--font-title)' }}>Qual desses procedimentos você vai escolher?</h3>
                    <p style={{ marginBottom: '30px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        Me chama no direct ou clique no botão abaixo para conversar comigo. Vamos juntas montar o seu <strong>plano de beleza personalizado</strong> e realçar o melhor do seu olhar!
                    </p>
                    <a 
                        href="https://api.whatsapp.com/send/?phone=5531971726124&text=Olá! Quero montar meu plano de beleza personalizado.&type=phone_number&app_absent=0&utm_source=ig" 
                        className="btn-gold" 
                        style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 35px', gap: '10px' }}
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
                        Montar Plano Personalizado
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Services;
