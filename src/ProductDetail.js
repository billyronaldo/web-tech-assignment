import React, { useState } from 'react';
import './ProductDetailStyles.css';

const ProductDetail = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const onQtyChange = (amount) => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + amount;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2 className="product-name">{product.name}</h2>
      <img className="product-image" src={product.image} alt={product.name} />
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      <div className="quantity-container">
        <label className="quantity-label">Quantity:</label>
        <button onClick={() => onQtyChange(-1)}>-</button>
        <input className="quantity-input" type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
        <button onClick={() => onQtyChange(1)}>+</button>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
