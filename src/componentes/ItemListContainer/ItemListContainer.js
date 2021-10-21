import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../context/CartContext";
import { UIContext } from "../../context/UIContext";
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from "./ItemList";


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
   
    const {loading, setLoading} = useContext(UIContext)

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then((res) => {

                if (categoryId) {
                    setItems(res.filter(prod => prod.category === categoryId))
                } else {
                    setItems( res )
                }

            })
            .catch((err) => console.log(err))
            .finally(()=> {
                setLoading(false)
            })
    },[categoryId])

    return (
        <section className="container my-5">
            {loading
                ? <h2>Cargando...</h2>
                :<ItemList productos={items}/>
            }
        </section>
    )
}