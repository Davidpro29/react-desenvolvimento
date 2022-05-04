import React from 'react';
import axios from 'axios';

class ApiReact extends React.Component {

    state = {
        carros:[]
        
    }

    componentDidMount(){
        axios.get('https://apireactex1.davidpro29.repl.co')
            .then(res=>{ 
                const dadosCarros = res.data
                this.setState({carros:dadosCarros})
            })
    }

    render(){
        
        return(            
            <div>
                
                {this.state.carros.map( carro=>
                        <div key={carro.id}>
                         {carro.id} {carro.marca} - {carro.modelo} 
                        </div>)}
            </div>
        )
    }
}

export default ApiReact;
