import React, { useEffect, useState } from 'react'

export const HomeView = () => {

    const [time, setTime] = useState( new Date() )
    //[variable, funcion que modifica la variable] = useState(variableDefinida)
    
    //let time = new Date();

    const updateTime = () => {
        setTime( new Date() )
    }

    useEffect( () => {
        console.log("Me monte")
        return () => {
            console.log("Me desmonte")
        }
    })

    useEffect( () => {
        setTimeout(updateTime, 1000);
    }, [time] )


    return (
        <div>
            <h3>{time.toLocaleString()}</h3>
        </div>
    )
}
