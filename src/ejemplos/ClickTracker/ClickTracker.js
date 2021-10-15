import React, { useState } from 'react'

export const ClickTracker = () => {

    const [counter, setCounter] = useState(0)
    
    const handleCounter = () => {
        setCounter( counter + 1 )
    }

    return (
        <div className="container">
            <button className="btn btn-primary" onClick={handleCounter}>
                Click me
            </button>
            <hr/>
            <h3>Cantidad de clicks: {counter}</h3>
            <h3>FyH: {counter > 0 ? new Date().toLocaleString() : ''}</h3>
        </div>
    )
}
