import React, { useState } from 'react';

const ProductDetail = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <label>Quantity:</label>
      <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;