import React, { useState } from 'react'

export const Form = () => {

   const[values, setValues]=useState({
       nombre:'',
       apellido: '',
       email: ''
   })

   const handleInputChange = (e) => {
      
       setValues({
           ...values,
           [e.target.name]:e.target.value
       })
   }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        
    }


    return (
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
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}


/* EJEMPLO

   const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleApellido = (e) => {
        setApellido(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre)
        console.log(apellido)
        console.log(email)
    }

    */