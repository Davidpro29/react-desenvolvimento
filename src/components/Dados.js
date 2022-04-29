import React from 'react';

function Dados(props){
    return(
        <section>
            <p>Futebol: {props.futebol}</p>
            <p>Mundo: {props.mundo()}</p>
            <p>Amazonas: {props.amazonas}</p>
        </section>
    )
}

export default Dados