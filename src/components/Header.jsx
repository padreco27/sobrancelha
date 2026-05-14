import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="logo">DALINE<span>CAMPOS</span></a>
                <nav className="nav-links">
                    <a href="#servicos">Serviços</a>
                    <a href="#linhas-tratamento">Tratamentos</a>
                    <a href="#antes-depois">Antes e Depois</a>
                    <a href="#formulario" className="btn-gold" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Agendar Agora</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
