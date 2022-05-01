import React from 'react';

function Map() {
  const carros=[
    {categoria: 'esporte', preco: 12000, modelo: 'golf'},
    {categoria: 'esporte', preco: 18000, modelo: 'mercedes'},
    {categoria: 'Suv', preco: 68000, modelo: 'hrv'},
    {categoria: 'Suv', preco: 99000, modelo: 'santafé'},
    {categoria: 'utilitario', preco: 85000, modelo: 'rager'},
    {categoria: 'utilitario', preco: 59000, modelo: 'hillux'},
  ]

  const listaCarros = carros.map(
    (c, i) => <li key={i}>{i} - R${c.preco} {c.modelo}</li>    
  )

  return (
  <>
    <h1>Listas com Map</h1>
    <ul>{listaCarros}</ul>
    
  </>
  );
}

export default Map;
