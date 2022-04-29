import React from 'react';

function Numero(props){

    return(
        <p>
           <p>Valor do state num em components: {props.num}</p>
        <button onClick={ ()=> props.setNum(props.num + 10) }>num + 10</button>   
        </p>        
    )
}

export default Numero;