import React from 'react';
import './styles.scss';

const Modal = (props, children) => {
  return (
    <div>
      <button onClick={props.onClick} className="fechar" />
      <div>
        <h4>
          Pagamento para <strong>{props.name}</strong>
        </h4>
      </div>
      <div className="ctModal">{children}</div>
    </div>
  );
};

export default Modal;
