import React from 'react';
import Product from './Product';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';

export default function Products() {
  const [value, setValue] = useState([]);
  useEffect(()=> {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setValue(res.data);
    })
  }, []);

  return (
    <div className='component'>
      <h1>Product list</h1>
      <section
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
          {value.map((obj, index) => {
            return(
            <Product key={obj.id}
              product={{
                title: obj.title,
                price: obj.price,
                image: obj.image,
                description: obj.description,
              }}
            />)
          })}
        {/* <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        /> */}
      </section>
    </div>
  );
}
