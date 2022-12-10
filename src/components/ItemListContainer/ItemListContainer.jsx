import { data } from "../../data/data";
import "./ItemListContainer.css"
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";



const ItemListContainer = () => {

  const [productList, setproductList]= useState([])
  const {categoryName}= useParams()
  const getProducts= new Promise((resolve , reject)=>{
setTimeout(()=>{
  if(categoryName){
    const filteredData= data.filter((producto)=>{
    return producto.category===categoryName
    })
    resolve(filteredData)
  }
else{
 resolve(data)
}
}, 1000)
  })
    useEffect(()=>{
      getProducts.then(resolve=>{
        setproductList(resolve)
      })
    }, [categoryName]) 

    return(
    <> 
    <div>
      <ItemList productList={productList}/>
    </div>
  </>
  )
}

export default ItemListContainer