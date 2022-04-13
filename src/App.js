import './Css/reset.scss';
import React, { useEffect, useState } from 'react';
import Usuario from './Components/Usuario/Usuario';

function App() {
  // Hooks
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((resp) => resp.json())
      .then((data) => setUsuario(data))
      .catch((erro) => console.log(erro));
  }, []);
  return (
    <>
      {usuario.map((pessoa) => (
        <Usuario id={pessoa.id} img={pessoa.img} name={pessoa.name} />
      ))}
    </>
  );
}

export default App;
