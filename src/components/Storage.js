import React, {useState} from 'react';

function App() {

  const [nome, setNome] = useState();

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor);
  }

  const consultar = (chave) => {
    alert(localStorage.getItem(chave));
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave);
  }

  return (
  <>
    <label>Digite um nome </label>
    <input type='text' value={nome} onChange={(e) =>setNome(e.target.value)}></input>

    <button onClick={() => armazenar('ls_nome', nome)}>Gravar nome</button>
    <button onClick={() => consultar('ls_nome')}>Consultar nome</button>
    <button onClick={() => apagar('ls_nome')} >Deletar nome</button>
  </>
  )
}

export default App;
