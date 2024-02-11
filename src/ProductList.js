import React from 'react';
import './ProductListStyles.css';
import mouse from './assets/pexels-john-petalcurin-2115256.jpg';
import rug from './assets/pexels-kelly-2950003.jpg';
import wallet from './assets/pexels-lukas-915915.jpg';
import airpod from './assets/pexels-dina-nasyrova-3825517.jpg';
import flower from './assets/pexels-teona-swift-6912905.jpg';

import './ProductListStyles.css';

const ProductList = ({ addToCart, setPage, setSelectedProduct }) => {
  const products = [
    { id: 1, name: 'Flower Bucket', price: 50, image: flower, description: 'Beautiful bouquet of assorted flowers.' },
    { id: 2, name: 'Rug', price: 15, image: rug, description: 'Soft and cozy rug for your living room.' },
    { id: 3, name: 'Wallet', price: 20, image: wallet, description: 'Stylish leather wallet with multiple compartments.' },
    { id: 4, name: 'Airpod', price: 100, image: airpod, description: 'Wireless earbuds with high-quality sound.' },
    { id: 5, name: 'Mouse', price: 10, image: mouse, description: 'Ergonomic mouse for comfortable use.' },
  ];
  

  const viewProductDetail = (product) => {
    setPage('productDetail');
    setSelectedProduct(product);
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
            <button onClick={() => viewProductDetail(product)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
