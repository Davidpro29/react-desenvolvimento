import React from 'react'

class Classe extends React.Component{
    constructor(props){
        super(props)
        this.canal='canal'
    }
    render(){
        return(
            <>
                <h3>Componente de classe do topo em Classe</h3>
                <p>Canal: {this.props.canal}</p>
            </>
            
        )
    }
}

export default Classe;