import {createContext, useState,useEffect } from "react"

export const CartContext= createContext()

const CartProvider = ({children}) => {
    const [cart,setCart]=useState([])

    const addToCart= (product,cantidad)=>{
        setCart([...cart,{product,cantidad}])
    }
  return (
    <CartContext.Provider value={{cart , addToCart}}>
     {children}
     </CartContext.Provider>
  )
}

export default CartProvider


