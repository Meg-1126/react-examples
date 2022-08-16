import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function Product(props) {
  const { product } = props;
  const [input, setInput] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleClick = () => {
    addToCart(product);
  };
  const { dispatch } = useContext(CartContext);
  return (
    <div className='component'>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt=''
        style={{ width: '100%', height: '300px' }}
      />
      <h2>Price: ${product.price}</h2>
      <p>{product.description}</p>
      {/* <button onClick={handleClick}>Add to cart</button> */}
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Add to cart</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Delete from cart</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset a cart</button>
    </div>
  );
}
