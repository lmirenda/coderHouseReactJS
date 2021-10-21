import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, title, description, price, pictureUrl, category, stock}) => {

    const {goBack, push} = useHistory()

    const {addToCart, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

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

    return (


        <div className="container my-5">
            <h2>{title}</h2>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>
            <h4>Precio ${price}</h4>
            {/* opcion contador de compra / contador */}

            {isInCart(id)
                ? <Link to="/cart" className="btn btn-success"> Terminar mi compra </Link>
                :
                <>
                    <ItemCount cantidad={cantidad} modifyCantidad={setCantidad} maxStock={stock}/>  
                    <hr/>
                    <button 
                        className="btn btn-success"
                        onClick={handleAgregar}
                    >
                        Agregar
                    </button>            
                </>
            }


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
