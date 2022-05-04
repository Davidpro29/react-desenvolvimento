import React from 'react'

class CarroClasse extends React.Component{
    constructor(props){
        super(props)
        this.modelo='Creta'
        this.state = {
            ligado:false,
            velAtual:0, 
        }
    }

    ligarDesligar(){
        this.setState({ligado:!this.state.ligado})
    }

    render(){
        return(
            <>
                
                <p>Modelo {this.modelo}</p>

                <h3>Características do carro </h3>

                <p>Ligado: {this.state.ligado ? 'sim':'nao'}</p>
                <button onClick={() => this.ligarDesligar() }>{this.state.ligado ? 'Desligar carro' : 'Ligar carro'}</button>

                <p>Velocidade Atual: {this.state.velAtual}</p>
            </>
            
        )
    }
}

export default CarroClasse;