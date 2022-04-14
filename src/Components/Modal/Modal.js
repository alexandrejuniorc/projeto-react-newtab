import React from 'react';
import './styles.scss';

const Modal = ({ name, children }) => {
  return (
    <div className="bgModal">
      <div className="modal">
        <button className="fechar" />
        <div>
          <h4>
            Pagamento para <strong>{name}</strong>
          </h4>
        </div>
        <div className="ctModal">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
