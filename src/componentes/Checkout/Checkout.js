import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import 'firebase/firestore'
import Swal from 'sweetalert2'
import { UIContext } from '../../context/UIContext'
import { Loader } from '../Loader/Loader'
import { generarOrden } from './generarOrden'

export const Checkout = () => {

    const {loading,setLoading} = useContext(UIContext)
    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)

    const[values, setValues]=useState({
        nombre:'',
        apellido: '',
        email: '',
        tel:''
    })
 
    const handleInputChange = (e) => {
       
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

     const handleSubmit = (e) => {
        e.preventDefault()
        
        if (values.nombre.length < 3){
            Swal.fire({
                icon:'error',
                title: 'Error de formulario',
                text: 'Debes completar el campo de nombre'
            })
            return
        }
        if (values.apellido.length < 3){
            Swal.fire({
                icon:'error',
                title: 'Error de formulario',
                text: 'Debes completar el campo de apellido'
            })
            return
        }
        if (values.email.length < 3){
            Swal.fire({
                icon:'error',
                title: 'Error de formulario',
                text: 'Debes completar el campo de email'
            })
            return
        }
        if (values.tel.length < 3){
            Swal.fire({
                icon:'error',
                title: 'Error de formulario',
                text: 'Debes completar el campo de telefono'
            })
            return
        }

        setLoading(true)
        generarOrden(values, carrito, calcularTotal())
            .then((res)=> {
                Swal.fire({
                    icon:'success',
                    title:'Orden registrada!',
                    text: `Guarde su numero: ${res}`,
                    willClose:() => {
                        vaciarCarrito()
                    }
                })
            })
            .catch((err)=> {
                Swal.fire({
                    icon:'error',
                    title:'Producto sin stock',
                    text: `No hay stock de: ${err.map(el => el.title).join(',')}`
                })
            })
            .finally(()=> {
                setLoading(false)
            })
    }

    return (
        <>
            {carrito.length === 0 && <Redirect to="/"/>}
            {loading && <Loader/>}

            <div>
                <h2>Complete sus datos</h2>
                <hr/>
                <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Nombre"
                        value={values.nombre}
                        name="nombre"
                        onChange={handleInputChange}
                    >
                    </input>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={values.apellido}
                        onChange={handleInputChange}
                    >
                    </input>
                    <input
                        className="form-control my-2"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        >
                    </input>
                    <input
                        className="form-control my-2"
                        type="tel"
                        placeholder="Telefono"
                        name="tel"
                        value={values.tel}
                        onChange={handleInputChange}
                    >
                    </input>
                    <button className="btn btn-primary" type="submit" disabled={loading}>Finalizar</button>
                </form>
            </div>
            </div>
        </>
    )
}
