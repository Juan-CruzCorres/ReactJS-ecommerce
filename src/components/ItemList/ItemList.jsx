import Item from "../Item/Item"

export const ItemList = ({productList}) => {

    return (
      
    <>
    
        {productList.map((producto)=>(
        <Item key={producto.id} product={producto}/>
       
       
    ))}

     
    </>

  )
  
}
