import React from 'react';
import './styles.scss';

const Aprovado = () => {
  return (
    <div className="bgAprovado">
      <div className="bgTexto">
        <p className="corAprovado">
          O pagamento foi <strong>concluido</strong> com sucesso.
        </p>
      </div>
    </div>
  );
};

export default Aprovado;
