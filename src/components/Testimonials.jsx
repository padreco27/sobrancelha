import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Helena Vasconcelos",
            text: "O atendimento é primoroso e o resultado do meu design ficou exatamente como eu queria: natural e elegante. Minha autoestima mudou completamente.",
            stars: 5
        },
        {
            name: "Beatriz Mendes",
            text: "Desde a primeira avaliação, percebi o profissionalismo. A linha de tratamento recuperou as falhas que eu tinha há anos nas sobrancelhas.",
            stars: 5
        },
        {
            name: "Carla Albuquerque",
            text: "Os resultados superaram minhas expectativas. O design respeitou o formato do meu rosto. Recomendo para quem busca o melhor para o seu olhar.",
            stars: 5
        },
        {
            name: "Mariana Oliveira",
            text: "A recuperação dos meus fios foi incrível. O cuidado com os detalhes e os produtos de alta qualidade fazem toda a diferença.",
            stars: 5
        }
    ];

    return (
        <section className="section depoimentos" id="depoimentos">
            <div className="container">
                <div className="section-title">
                    <h2>Experiências Reais</h2>
                    <p>Relatos de mulheres que transformaram o seu olhar com a nossa técnica exclusiva.</p>
                </div>
                <div className="testimonials-carousel">
                    {reviews.map((review, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="depoimento-stars" style={{ color: 'var(--gold)', marginBottom: '15px' }}>
                                {[...Array(review.stars)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                            </div>
                            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                "{review.text}"
                            </p>
                            <h4 style={{ color: 'var(--primary)', fontFamily: 'var(--font-title)' }}>
                                {review.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
