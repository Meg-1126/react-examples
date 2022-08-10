import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';

export default function CartList() {
  const {cartList} = useContext(CartContext);
  function isListEmpty (cartList) {
     if (cartList.length > 0) {
      return false; 
     } else {
      return true;
     }
  } 
  return (
    <div className='component'>
      <h1>Cart list</h1>
      <ul>
        {cartList.map((list)=>{
          return (
        <li style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
            <span>{list.title}</span>
            <span>${list.price}</span>
        </li>
          )
        })}
      </ul>
      Total: $0
    </div>
  );
}
