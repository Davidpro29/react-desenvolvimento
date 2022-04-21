import styles from './Frase.module.css';

function Frase() {
    return(
        <div className={styles.fraseContainer}>
            <p className ={styles.fraseContent}>Ponto de frase dentro do componente com css modules!</p>
        </div>
    )
}

export default Frase;