import React from 'react';
import './styles.scss';

const Modal = ({ name, children, fechar }) => {
  return (
    <div className="bgModal">
      <div className="modal" key={name}>
        <button className="fechar" onClick={fechar} />
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
