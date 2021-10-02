import React from 'react'

const brandName = "TiendaTecno"

export const NavBar = () => {
    return (
        <header>
            <h1>{ brandName }</h1>

            <nav>
                <a href="#">Productos </a>
                <a href="#">Ofertas </a>
                <a href="#">Carrito</a>
            </nav>
        </header>
    )
}
