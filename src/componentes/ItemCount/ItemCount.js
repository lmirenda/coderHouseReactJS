import React from 'react'

export const ItemCount = ( {cantidad, modifyCantidad, maxStock} ) => {


    const handleRestar = () => {
        if (cantidad >0){
            modifyCantidad(cantidad-1)
        }
    }

    const handleSumar = () => {
        if (cantidad < maxStock){
            modifyCantidad(cantidad+1)
        }
    }

    return (
        <div>
            <button
                className="btn btn-primary mx-3"
                onClick={handleRestar}
            >
                -
            </button>
            <span className="mx-3">{cantidad}</span>
            <button
                className="btn btn-primary mx-3"
                onClick={handleSumar}
            >
                +
            </button>
        </div>
    )
}
