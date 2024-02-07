import React from 'react';
import mouse from './assets/pexels-john-petalcurin-2115256.jpg';
import rug from './assets/pexels-kelly-2950003.jpg';
import wallet from './assets/pexels-lukas-915915.jpg';

const getProductById = (productId) => {
  // Simulate fetching product details from a database
  const products = {
    1: { id: 1, name: 'Mouse', price: 10, image: mouse, description: 'Description for Mouse product' },
    2: { id: 2, name: 'Rug', price: 15, image: rug, description: 'Description for Rug product' },
    3: { id: 3, name: 'Wallet', price: 10, image: wallet, description: 'Description for Wallet product' },
  };

  return products[productId];
};

const ProductDetail = ({ productId }) => {
  const product = getProductById(productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
