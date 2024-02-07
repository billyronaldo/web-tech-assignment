// ProductList.js
import React from 'react';
import './ProductListStyles.css';
import mouse from './assets/pexels-john-petalcurin-2115256.jpg';
import rug from './assets/pexels-kelly-2950003.jpg';
import wallet from './assets/pexels-lukas-915915.jpg';
import './ProductListStyles.css';


const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Mouse', price: 10, image: mouse },
    { id: 2, name: 'Rug', price: 15, image: rug },
    { id: 1, name: 'Wallet', price: 10, image: wallet },
    { id: 2, name: 'Product 4', price: 15, image: mouse },
    { id: 1, name: 'Product 5', price: 10, image: rug },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
