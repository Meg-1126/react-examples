import React from 'react';
import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);
  
  const addToCart = (product) => {
    setCartList([...cartList, product]);
    console.log(cartList);
  }

  const calculateTotal = () => {
    cartList.reduce((total, item)=> {
    return total + item.price;
    
    },0)
  }


  return (
    <CartContext.Provider value={{cartList, addToCart}}>
    {children}
    </CartContext.Provider>
  );
}