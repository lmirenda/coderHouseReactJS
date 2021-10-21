import React, { createContext, useEffect, useState } from 'react'




export const CartContext = createContext()  // Creo el contexto bajo el nombre de CartContext

export const CartProvider = ({children}) => {

    const init = JSON.parse(localStorage.getItem('carrito')) || []      // Cada vez que inicio la app es lo que leo del local storage o un array vacio si es undefined.

    
    const [carrito, setCarrito] = useState(init)
    console.log(carrito)
  
    const addToCart = (item) => {
      setCarrito([...carrito, item])
    }
  
    const removeItem = (itemId) => {
      const newCart = carrito.filter( (prod) => prod.id !== itemId)
      setCarrito( newCart )
    }
  
    const calcularCantidad = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad,0)
    }

    const calcularTotal = () => {
      return carrito.reduce( (acc,prod) => acc + prod.cantidad*prod.price,0)
    }

    const isInCart = (itemId) => {
      return carrito.some( (prod) => prod.id==itemId)
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }

    useEffect(()=>{
        localStorage.setItem('carrito',JSON.stringify(carrito))
      })

    return(
        <CartContext.Provider value={
            {
                carrito,
                addToCart,
                removeItem,
                vaciarCarrito,
                calcularCantidad,
                isInCart,
                calcularTotal
            }
        }>
            {children}
        </CartContext.Provider>
    )
}