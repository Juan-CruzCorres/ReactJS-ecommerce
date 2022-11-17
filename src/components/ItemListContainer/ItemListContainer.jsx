import { data } from "../../data/data";
import "./ItemListContainer.css"
import { useEffect , useState} from "react";
import { ItemList } from "../ItemList/ItemList";



const ItemListContainer = (props) => {

  const [productList, setproductList]= useState([])

  const getProducts= new Promise((resolve , reject)=>{
setTimeout(()=>{
resolve(data)
}, 3000)
  })
    useEffect(()=>{
      getProducts.then(respuesta=>{
        setproductList(respuesta)
        
      })
      console.log(productList)
    }, [productList]) 

    return(
    <>
    
    <div>
      <ItemList productList={productList}/>
    </div>

  </>
  )
}

export default ItemListContainer