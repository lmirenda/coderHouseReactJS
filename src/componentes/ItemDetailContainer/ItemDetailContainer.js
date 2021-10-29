import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
// import { pedirProductos } from '../../helpers/pedirProductos'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
   
    const {loading, setLoading} = useContext(UIContext) 

    const {itemId} = useParams()


    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const itemCollection = db.collection('productos')
        const item = itemCollection.doc(itemId)

        item.get()
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data()
                })
            })
            .finally(()=>{
                setLoading(false)
            })
    },[itemId])

    return (
        <div>
            {
                loading 
                ? <Loader/>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}
