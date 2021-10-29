import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, title, description, price, pictureUrl, category, stock}) => {

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            id,
            title,
            price,
            category,
            cantidad
        }
        console.log("Agregado: ", newItem)
        if (cantidad>0){
            addToCart(newItem)
        }
    }


    const styles = {
        btnAgregar:isInCart(id) ? "btn btn-secondary m-2" : "btn btn-success m-2",
        btnTerminar: "btn btn-success m-2"
    }

    return (


        <div className="container my-5">
            <h2>{title}</h2>
            <hr/>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>
            <h4>Precio ${price}</h4>
       

            <>
                <ItemCount cantidad={cantidad} modifyCantidad={setCantidad} maxStock={stock}/>
                <button
                    disabled={isInCart(id) || cantidad == 0}
                    className={styles.btnAgregar}
                    onClick={handleAgregar}
                >
                    Agregar
                </button>
            </>

            <Link to="/cart">
                 <button
                    disabled={!isInCart(id) || cantidad == 0}
                    className={styles.btnTerminar}
                >
                    Terminar Mi Compra
                </button>
            </Link>


            <button
                className="btn btn-primary"

                onClick={goBack}
            >
                Volver...
            </button>

            <button onClick={() => push("/")} className="btn btn-primary">
                Volver al inicio
            </button>
        </div>
    )
}
