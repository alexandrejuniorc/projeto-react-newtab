import './Css/reset.scss';
import React, { useEffect, useState } from 'react';
import Usuario from './Components/Usuario/Usuario';
import Modal from './Components/Modal/Modal';
import Pagamento from './Components/Modal/Pagamento/Pagamento';

function App() {
  // Hooks
  const [usuario, setUsuario] = useState([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((resp) => resp.json())
      .then((data) => setUsuario(data))
      .catch((erro) => console.log(erro));
  }, []);
  return (
    <>
      {usuario.map((pessoa) => (
        <Usuario
          key={pessoa.id}
          id={pessoa.id}
          img={pessoa.img}
          name={pessoa.name}
          onClick={() => setModal(true)}
        />
      ))}
      {modal
        ? usuario.map((pessoa) => (
            <Modal name={pessoa.name}>
              <Pagamento />
            </Modal>
          ))
        : null}
    </>
  );
}

export default App;
