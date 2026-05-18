import React from 'react';

const Footer = () => (
    <footer className="footer" style={{ borderTop: '1px solid var(--gray-light)', background: 'var(--white)' }}>
        <div className="container">
            <div className="footer-content">
                <div className="footer-item">
                    <h3 style={{ color: 'var(--primary)' }}>DALINE<span>CAMPOS</span></h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Um refúgio de cuidado e excelência em Paraopeba para transformar o seu olhar com a Rainha das Sobrancelhas.</p>
                    <div style={{ marginTop: '20px' }}>
                        <a href="https://www.instagram.com/dalinecamposbeauty/" target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', marginRight: '15px' }}><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-item">
                    <h3 style={{ color: 'var(--primary)' }}>Horários</h3>
                    <p><strong>De terça a sábado</strong></p>
                    <p>Terça e quinta: 9:00 às 19:00</p>
                    <p>Quarta: 9:00 às 18:00</p>
                    <p>Sexta: 8:00 às 19:00</p>
                    <p>Sábado: 8:00 às 15:00</p>
                </div>
                <div className="footer-item">
                    <h3 style={{ color: 'var(--primary)' }}>Localização</h3>
                    <p><i className="fas fa-map-marker-alt" style={{ marginRight: '10px' }}></i> Paraopeba - MG</p>
                    <p><i className="fas fa-phone" style={{ marginRight: '10px' }}></i> (31) 97172-6124</p>
                </div>
            </div>
            <div className="footer-bottom" style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '30px' }}>
                <p>&copy; 2026 Daline Campos Beauty. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
