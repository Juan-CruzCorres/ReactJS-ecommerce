import Item from "../Item/Item"

export const ItemList = ({productList}) => {

    return (
    <>
    
        {productList.map((product)=>(
        <Item key={product.id} producto={product}/>
    ))}

     
    </>
    
  )
}
