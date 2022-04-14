import './Css/reset.scss';
import React, { useEffect, useState } from 'react';
import Usuario from './Components/Usuario/Usuario';
import Modal from './Components/Modal/Modal';
import Pagamento from './Components/Modal/Pagamento/Pagamento';
import Aprovado from './Components/Modal/Aprovado/Aprovado';
import Recusado from './Components/Modal/Recusado/Recusado';

function App() {
  // Hooks
  const [usuario, setUsuario] = useState([]);
  const [modal, setModal] = useState(false);
  const [pagamento, setPagamento] = useState(null);

  //  requisição dos dados da API de usuários
  // foi usado o useEffect para que não tenha um loop infinito e seja chamada a API uma vez só
  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((resp) => resp.json())
      .then((data) => setUsuario(data))
      .catch((erro) => console.log(erro));
  }, []);

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
            titulo="Pagamento para"
            subtitulo={pagamento.name}
            fechar={() => setModal(false)}
          >
            <Pagamento />
          </Modal>
        ) : null
      }
    </>
  );
}

export default App;
