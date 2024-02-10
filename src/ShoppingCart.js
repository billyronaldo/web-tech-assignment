import React, { useState } from 'react';
import './ShoppingCartStyles.css';

const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleQuantityChange = (item, quantity) => {
    updateQuantity(item, quantity);
  };

  const getTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const finalizePurchase = () => {
    cart.forEach(item => removeFromCart(item));
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 3000);
  };

  return (
    <div className='shopping-cart'> 
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name}/>
              {item.name} - ${item.price} - Quantity: 
              <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item, e.target.value)} />
              Total Price: ${getTotalPrice(item)} 
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={finalizePurchase}>Finalize Purchase</button>}
      {showSuccessPopup && <div className="success-popup">Purchase Successful!</div>}
    </div>
  );
};

export default ShoppingCart;
