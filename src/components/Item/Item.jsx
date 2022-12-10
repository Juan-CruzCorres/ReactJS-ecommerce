const Item = ({product}) => {
console.log(product)
  return (
    
    <>
            <div>
        {/* <img/> */}
        <h2>{product.nombre}</h2>
        <p>{product.precio}</p>
        <p>{product.plataforma}</p>
            </div>
    </>
  
     
    
      
    )


}

export default Item