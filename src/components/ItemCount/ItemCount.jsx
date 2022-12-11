import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemCount = ({functionHandler,contador}) => {
   
  return (
    <div>
        <button onClick={()=>{functionHandler(contador + 1)}}>Agregar</button>
        <button onClick={()=>{functionHandler(contador - 1)}}>Quitar</button>
    </div>
  )
}

export default ItemCount