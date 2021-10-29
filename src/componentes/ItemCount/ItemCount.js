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
                className={`btn ${cantidad == 0 ? "btn-danger" : "btn-primary"}`}
                disabled={cantidad == 0}
                onClick={handleRestar}
            >
                -
            </button>
            <span className="mx-3">{cantidad}</span>
            <button
                className={`btn ${cantidad == maxStock ? "btn-danger" : "btn-primary"}`}
                disabled={cantidad == maxStock}
                onClick={handleSumar}
            >
                +
            </button>
        </div>
    )
}
