import React, {useState, useEffect} from 'react';
import './ProductListStyles.css';
import { getAllProducts, addToCart } from './apiConnections';

import './ProductListStyles.css';

const ProductList = ({ setPage, setSelectedProduct }) => {
  const [products, setProducts] = useState([]);
  const userId = '6614c3d1e9044ec38fc5e2f1'; // Hardcoded user ID

  useEffect(() => {
    getAllProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);


  const viewProductDetail = (product) => {
    setPage('productDetail');
    setSelectedProduct(product);
  };

  const addCart = async (userId, productId, quantity) => {
    try {
      console.log(productId, quantity)
      await addToCart(userId, productId, quantity);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.pricing}</p>
            <button onClick={() => addCart(userId, product._id, 1)}>Add to Cart</button>
            <button onClick={() => viewProductDetail(product)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
