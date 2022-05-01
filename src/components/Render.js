import React, {useState} from 'react';

function Render() {

  const [cor, setCor] = useState(1)

  const vermelho = {background: '#f00'}
  const verde = {background: '#0f0'}
  const azul = {background: '#00f'}

  const retCor = (c) =>{
    if(c===1){ return vermelho
    }else if(c===2){
      return verde
    }else { 
      return azul
    }
  }
  const mudaCor = ()=>{
    setCor(cor+1)
    if(cor > 2){
      setCor(1)
    }
  }

  return (
  <>
    <h1 style={retCor(cor)}>Cor do painel</h1>
    <button onClick={()=>mudaCor()}>Mudar de cor</button>
  </>
  );
}

export default Render;

// renderização condicional