import React from 'react';
import './styles.scss';

const Modal = ({ name, children }) => {
  return (
    <div className="bgModal">
      <div className="modal">
        <button className="fechar" />
        <div>
          <p>
            Pagamento para <strong> {name} </strong>
          </p>
        </div>
        <div className="ctModal">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
