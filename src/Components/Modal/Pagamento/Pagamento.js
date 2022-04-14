import React from 'react';
import './styles.scss';

const Pagamento = () => {
  return (
    <div className="bgPagamento">
      <div className="bgInput">
        <input type="text" placeholder="R$ 0,00" />
      </div>

      <div className="bgSelect">
        <select name="" id="">
          <option>Nº Cartão</option>
        </select>
      </div>
      <div className="botaoPagar">
        <button type="submit">Pagar</button>
      </div>
    </div>
  );
};

export default Pagamento;
