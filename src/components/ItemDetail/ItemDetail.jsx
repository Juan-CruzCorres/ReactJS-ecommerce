const ItemDetail = ({productSelected}) => {
    if (productSelected){
  return (
     <div>
        <h2>{productSelected.nombre}</h2>
        <p>{productSelected.precio}</p>
        <p>{productSelected.plataforma}</p>
    </div>
  )
}
}

export default ItemDetail