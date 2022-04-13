import React from 'react';
import './styles.scss';

const Container = ({ children }) => {
  /* dentro do children irá possuir os elementos filhos */
  return (
    /* customClass puxa o css do container e puxa a classe que vem das propriedades dentro do item */
    <div className="container">{children}</div>
  );
};

export default Container;
