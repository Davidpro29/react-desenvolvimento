import React, {useState} from 'react';


function Formulario() {
  
    const [nome, setNome] = useState('')
    const [carro, setCarro] = useState('Golf')    

  return (
  <>
    <h1>Formulario</h1>
    <label>Digite seu nome </label>
    <input type="text" name="fnome" value={nome} onChange={(e) =>setNome(e.target.value)}/>
    <p>Nome digitado: {nome}</p>

    <label>Selecione um carro</label>
    <select value={carro}onChange={(e) =>setCarro(e.target.value)}>

      <option value='Golf'>Golf</option>
      <option value='Polo'>Polo</option>
      <option value='Hrv'>Hrv</option>
      <option value='Hillux'>Hillux</option>

    </select>
    <p>Carro selecionado: {carro}</p>    
  </>
  );
}

export default Formulario;
