import React from 'react';
import Dados from './Dados'


function Corpo(){

    const natureza = 'queimadas na Amazonia'
    const nao = () => {
        return 'não a guerra'
    }

    return(

        <>
            <section>
                <h2>Título do corpo</h2>
                <p>inserção de dados no corpo</p>
                <p>Finalização de dados no corpo</p>
            </section>

            <Dados              
                amazonas={natureza}
                futebol='Corinthians' 
                mundo={nao}
            />
        </>
       
    )
}

export default Corpo;