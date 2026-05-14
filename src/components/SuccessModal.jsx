import React from 'react';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay active">
      <div className="modal">
        <div className="modal-check">
          <i className="fas fa-check"></i>
        </div>
        <h2>Avaliação agendada com sucesso!</h2>
        <p>Em breve entraremos em contato para confirmar seu horário.</p>
        <button className="modal-close" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default SuccessModal;
