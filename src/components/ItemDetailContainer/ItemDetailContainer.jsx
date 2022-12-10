import ItemDetail from '../ItemDetail/ItemDetail'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data/data'

const ItemDetailContainer = () => {
    const {id}= useParams()
    const [productSelected , setProductSelected]=useState()
    console.log(productSelected)
    const getProducts= ()=>{
        const productFiltered=data.filter((producto)=>{
            return producto.id==id
        })
        setProductSelected(...productFiltered)
        
    }
useEffect(()=>{
    getProducts()
},[id])
       
  return (
    <div>
      
        <ItemDetail productSelected={productSelected} />
    </div>
  )
}

export default ItemDetailContainer