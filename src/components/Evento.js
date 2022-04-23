import Button from './evento/Button'

function Evento (){
    function meuEvento (){
        console.log(`botão da props 1 ativado`)
    }

    return(
        <div>
            <p>Clique para disparar o Evento no React</p>
            <Button event={meuEvento} text="PrimeiroEvento"/>
        </div>
    )
}

export default Evento;