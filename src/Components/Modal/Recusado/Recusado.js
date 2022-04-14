import React from 'react';
import './styles.scss';

const Recusado = () => {
  return (
    <div className="bgReprovado">
      <div className="bgTexto">
        <p className="corRecusado">
          O pagamento <strong>NÃO</strong> foi concluido com sucesso.
        </p>
      </div>
    </div>
  );
};

export default Recusado;
