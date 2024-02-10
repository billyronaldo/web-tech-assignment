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
        <p className="no-items">No items</p>
      ) : (
        <ul className="cart-items">
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name}/>
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">${item.price}</p>
                <div className="quantity-container">
                  <label>Quantity:</label>
                  <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item, e.target.value)} />
                </div>
                <p className="total-price">Total Price: ${item.price * item.quantity}</p>
                <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div>
          <p className="total-price">Total Price: ${getTotalPrice()}</p>
          <button className="buy-button" onClick={buyItems}>Buy</button>
        </div>
      )}
      {showSuccessPopup && <div className="success-popup">Purchase Successful!</div>}
    </div>
  );
};

export default ShoppingCart;
