import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ApiReact(){

    const [carros, setCarros] = useState([])

    useEffect(()=>{
        
        axios.get('https://apireactex1.davidpro29.repl.co')
            .then(res=>{ 
                const dadosCarros = res.data
                setCarros(dadosCarros)
            })
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

export default ApiReact;
