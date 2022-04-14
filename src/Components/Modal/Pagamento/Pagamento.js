import React from 'react';
import './styles.scss';
import { cartoes } from '../../Cartoes/cartoes';
import { Mascara } from '../../Mascara/Mascara';
const Pagamento = () => {
  return (
    <div className="bgPagamento">
      <div className="bgInput">
        <input
          type="text"
          placeholder="R$ 0,00"
          onKeyUp={Mascara}
          maxLength="30"
          required
        />
      </div>

      <div className="bgSelect">
        <select name="selecionaCartao">
          <option disabled>Nº Cartão</option>,
          {cartoes.map((cartao) => {
            return (
              <option key={cartao.card_number} value={cartao.card_number}>
                Cartão com final {cartao.card_number.substring(12)}
              </option>
            );
          })}
        </select>
      </div>
      <div className="botaoPagar">
        <button type="submit">Pagar</button>
      </div>
    </div>
  );
};

export default Pagamento;
