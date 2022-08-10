import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Product(props) {
  const {addToCart} = useContext(CartContext);
  const handleClick = () => {
    addToCart(props.product);
    console.log(props);
  }

  return (
    <div className='component'>
      <h1>{props.product.title}</h1>
      <img src={props.product.image} alt='' style={{ width: '100%', height: '300px' }} />
      <h2>Price: ${props.product.price}</h2>
      <p>{props.product.description}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
}
