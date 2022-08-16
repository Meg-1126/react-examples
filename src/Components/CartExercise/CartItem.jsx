import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function CartItem(props) {
  const { state } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { item } = props;
  return (
    <li style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr' }}>
      <div>
        <button onClick={() => removeItem(item.id)}>X</button>
        <span>{item.title}</span>
      </div>
      <span>{item.quantity}*{Number(state.count)}</span>
      {/* <span>{item.quantity}</span> */}
      <span>${item.price}</span>
    </li>
  );
}
