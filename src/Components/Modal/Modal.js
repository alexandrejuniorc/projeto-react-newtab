import React from 'react';
import './styles.scss';

const Modal = (props) => {
  return (
    <div className="bgModal">
      <div className="modal">
        <button className="fechar" onClick={props.fechar} />
        <div className="bgTitulo">
          <p>
            {props.titulo}
            <strong className="bgSubtitulo">{props.subtitulo}</strong>
          </p>
        </div>
        <div className="ctModal">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
