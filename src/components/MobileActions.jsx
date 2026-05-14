import React from 'react';

const MobileActions = () => {
    return (
        <div className="mobile-actions">
            <a href="#formulario" className="btn-gold">Iniciar Avaliação</a>
            <a 
                href="https://api.whatsapp.com/send/?phone=5531971726124&text&type=phone_number&app_absent=0&utm_source=ig" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp-mobile"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
};

export default MobileActions;
