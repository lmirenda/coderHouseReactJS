import React from 'react'
import { useHistory } from 'react-router'

export const ItemDetail = ({id, title, description, price, pictureUrl, category}) => {

    const {goBack, push} = useHistory()

    return (


        <div className="container my-5">
            <h2>{title}</h2>
            <img src={pictureUrl} alt={title}/>
            <p>{description}</p>
            <h4>Precio ${price}</h4>

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
