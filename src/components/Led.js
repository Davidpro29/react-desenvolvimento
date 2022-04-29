import React, {useState} from 'react';
import ledVerde from './img/ledVerde.png';
import ledVermelho from './img/ledVermelho.png';

function Led() {

  const [ligado, setLigado] = useState(false)

  return (
    <>
      <h1 style={{color: '#fff'}}>Eventos</h1>
      <img style={{width: '100px'}} alt='led vermelho' src={ligado?ledVerde:ledVermelho}/>
      <button onClick={() => setLigado(!ligado)}>{ligado?'Desligar':'Ligar'}</button>
    </>    
  );
}

export default Led;
