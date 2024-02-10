import React, { useState } from 'react';
import './ShoppingCartStyles.css';

const ShoppingCart = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleQuantityChange = (item, quantity) => {
    updateQuantity(item, quantity);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const buyItems = () => {
    clearCart();
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 1100);
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
              Total Price: ${item.price * item.quantity} 
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div>
          <p>Total Price: ${getTotalPrice()}</p>
          <button onClick={buyItems}>Buy</button>
        </div>
      )}
      {showSuccessPopup && <div className="success-popup">Purchase Successful!</div>}
    </div>
  );
};

export default ShoppingCart;
