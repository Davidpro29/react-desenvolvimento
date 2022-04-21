function Evento ({numero}){

    function meuEvento (){
        console.log(`o ${numero} foi ativado`)
    }

    return(
        <div>
            <p>Clique para disparar o Evento no React</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento;