import React, { useContext, useEffect, useState } from "react";
import { BsChatSquareQuote } from "react-icons/bs";
import { useParams } from "react-router";
// import { CartContext } from "../../context/CartContext";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/config";
// import { pedirProductos } from '../../helpers/pedirProductos'
import { Loader } from "../Loader/Loader";
import { ItemList } from "./ItemList";


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
   
    const {loading, setLoading} = useContext(UIContext)

    const {categoryId} = useParams()

    useEffect(()=>{

        const db = getFirestore()
        const itemCollection = categoryId 
                                ? db.collection('productos').where('category','==',categoryId)
                                : db.collection('productos')

            itemCollection.get()
                .then((response)=> {
                    const newItems = response.docs.map((doc)=>{
                        return {id: doc.id, ...doc.data()}
                    })
                    setItems(newItems)
                })
                .catch(err => console.log(err))
                .finally(()=> {setLoading(false)})        
    },[categoryId])

    return (
        <section className="container my-5">
            {loading
                ? <Loader/>
                :<ItemList productos={items}/>
            }
        </section>
    )
}