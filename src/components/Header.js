import React from 'react';
import Foto from './img/lista-nome-css.png'

function Header() {
    return (
        <header>
            <img src={Foto} alt="Foto JS"/>
            <p>Imagem de Header</p>
        </header>
    )
}

export default Header;