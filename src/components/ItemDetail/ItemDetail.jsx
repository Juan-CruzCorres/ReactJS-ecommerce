import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({productSelected}) => {
  const [contador,setContador]=useState(0)
    if (productSelected){
  return (
    <>
     <div>
        <h2>{productSelected.nombre}</h2>
        <p>{productSelected.precio}</p>
        <p>{productSelected.plataforma}</p>
    </div>
    <div>
    <ItemCount functionHandler={setContador} contador={contador}/>
    <p>cantidad de prdouctos {contador}</p>
    </div>
    </>
  )
}
}

export default ItemDetail