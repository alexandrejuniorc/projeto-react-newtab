import React from 'react';
import Container from '../Container/Container';
import './styles.scss';

const Usuario = (props) => {
  return (
    <Container>
      <div key={props.id} className="bgUsuario">
        <div className="bgImg">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="bgDados">
          <p>{props.name}</p>
          <p>
            ID:{props.id} - Username: {props.username}
          </p>
        </div>
        <button onClick={props.onClick}>Pagar</button>
      </div>
    </Container>
  );
};

export default Usuario;
