import React from 'react';
import CaixaCanal from './CaixaCanal'


function Concatenacao() {
  return (
  <>
    <CaixaCanal site={'www.google.com'}>        
        <h1>Dentro de concatenacao</h1>
        <p>paragrafo de concatenacao</p>
    </CaixaCanal>
  </>
  );
}

export default Concatenacao;
