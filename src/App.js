import './Css/reset.scss';
import React, { useEffect, useState } from 'react';
import Usuario from './Components/Usuario/Usuario';
import Modal from './Components/Modal/Modal';
import Pagamento from './Components/Modal/Pagamento/Pagamento';
import Aprovado from './Components/Modal/Aprovado/Aprovado';
import Recusado from './Components/Modal/Recusado/Recusado';
import { Mascara } from './Components/Mascara/Mascara';
import { cartoes } from './Components/Cartoes/cartoes';

function App() {
  // Hooks
  const [usuario, setUsuario] = useState([]);
  const [modal, setModal] = useState(false);
  const [pagamento, setPagamento] = useState(null);
  const [pagamentoSucesso, setSucesso] = useState(false);
  const [pagamentoErro, setErro] = useState(false);

  //  requisição dos dados da API de usuários
  // foi usado o useEffect para que não tenha um loop infinito e seja chamada a API uma vez só
  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((resp) => resp.json())
      .then((data) => setUsuario(data))
      .catch((erro) => console.log(erro));
  }, []);

  const dadosCC = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const value = formData.get('valorPago');
    const cartao = formData.get('selecionaCartao');
    const selecaoCartao = cartoes.find(
      (cartaoObjeto) => cartaoObjeto.card_number === cartao,
    );

    (
      await fetch(
        'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989',
        {
          method: 'POST',
          body: {
            card_number: cartao,
            cvv: selecaoCartao,
            expiry_date: selecaoCartao.expiry_date,

            destination_user_id: pagamento.id,

            value: value,
          },
        },
      )
    ).json();

    if (cartao === '1111111111111111') {
      setSucesso(true);
    } else {
      setErro(true);
    }
    setModal(false);
  };

  // função que irá abrir o modal
  // também irá seta o pagamento para o map 'usuario'
  function abrirModal(usuario) {
    setPagamento(usuario);
    setModal(true);
  }

  return (
    <>
      {
        // Lista os usuários com ID, NAME e IMAGEM
        usuario.map((pessoa) => (
          <Usuario
            key={pessoa.id}
            id={pessoa.id}
            img={pessoa.img}
            name={pessoa.name}
            username={pessoa.username}
            onClick={() => {
              abrirModal(pessoa);
            }}
          />
        ))
      }
      {
        // Modal Aberto para fazer o pagamento
        modal ? (
          <Modal
            titulo="Pagamento para "
            subtitulo={pagamento.name}
            fechar={() => setModal(false)}
          >
            <Pagamento>
              <div className="bgPagamento">
                <form className="bgInput" onSubmit={dadosCC}>
                  <input
                    name="valorPago"
                    type="text"
                    placeholder="R$ 0,00"
                    onKeyUp={Mascara}
                    maxLength="30"
                    required
                  />

                  <div className="bgSelect">
                    <select name="selecionaCartao">
                      <option disabled>Nº Cartão</option>,
                      {cartoes.map((cartao) => {
                        return (
                          <option
                            key={cartao.card_number}
                            value={cartao.card_number}
                          >
                            Cartão com final {cartao.card_number.substring(12)}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="botaoPagar">
                    <input type="submit" value="Pagar" />
                  </div>
                </form>
              </div>
            </Pagamento>
          </Modal>
        ) : null
      }
      {pagamentoSucesso && (
        <Modal fechar={() => setSucesso(false)}>
          <Aprovado />
        </Modal>
      )}
      {pagamentoErro && (
        <Modal fechar={() => setErro(false)}>
          <Recusado />
        </Modal>
      )}
    </>
  );
}

export default App;
