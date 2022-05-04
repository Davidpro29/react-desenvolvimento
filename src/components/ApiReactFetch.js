import React, {useState, useEffect} from 'react';

function ApiReactFetch(){

    const [carros, setCarros] = useState([])

    useEffect(() => {
        fetch('https://apireactex1.davidpro29.repl.co')
            .then((res)=>res.json())
            .then(
                (resultado)=>{
                    setCarros(resultado);
                }
            )
        }
    )       
         

    return(            
        <div>
            {carros.map(
                 carro=><div key={carro.id}> {carro.id} {carro.marca} - {carro.modelo} </div>
            )}
        </div>        
    )    
}

export default ApiReactFetch;
