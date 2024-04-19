import React, { useState, useEffect } from 'react';
import { getCart, getProductById, updateCartQuantity, removeFromCart, placeOrder } from './apiConnections';
import './ShoppingCartStyles.css';

const ShoppingCart = ({ clearCart }) => {
  const [cart, setCart] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [productsData, setProductsData] = useState([]);
  

  const userId = '6614c3d1e9044ec38fc5e2f1'; // Hardcoded user ID

  useEffect(() => {
    fetchCartData();
  }, [userId]);

  useEffect(() => {
    fetchProductsData();
  }, [cart]);

  const fetchCartData = async () => {
    try {
      const cartData = await getCart(userId);
      setCart(cartData);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const fetchProductsData = async () => {
    if (!cart || cart.products.length === 0) {
      setProductsData([]);
      return;
    }

    const productsPromises = cart.products.map(product => getProductById(product._id));
    Promise.all(productsPromises)
      .then(products => setProductsData(products))
      .catch(error => {
        console.error('Error fetching product data:', error);
        setProductsData([]);
      });
  };

  const onQtyChange = async (productId, newQuantity) => {
    try {
      await updateCartQuantity(userId, productId, newQuantity);
      const updatedCartData = await getCart(userId);
      setCart(updatedCartData);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };


  const getTotalPrice = () => {
    if (!cart || !productsData || productsData.length === 0) return 0;
  
    let totalPrice = 0;
    for (let i = 0; i < cart.products.length; i++) {
      const productId = cart.products[i]._id;
      const product = productsData.find(p => p._id === productId);
      if (product && !isNaN(cart.quantities[i])) {
        const price = parseFloat(product.pricing); 
        if (!isNaN(price)) { 
          totalPrice += price * cart.quantities[i];
        }
      }
    }
    return totalPrice;
  };
  

  const deleteProduct = async (productId) => {
    try {
      await removeFromCart(userId, productId);
      fetchCartData(); 
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const buyItems = async () => {
    try {
      const products = cart.products.map(product => product._id);
      const quantities = cart.quantities;
      await placeOrder(userId, products, quantities);
      await clearCart();

      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 1100);

      fetchCartData();
    } catch (error) {
      console.error('Error buying items:', error);
    }
  };

  if (!cart) return <p>No Items</p>;

  return (
    <div className='shopping-cart'> 
      <h2>Shopping Cart</h2>
      {cart.products.length === 0 ? (
        <p className="no-items">No items</p>
      ) : (
        <ul className="cart-items">
          {cart.products.map((product, index) => (
            <li key={product._id} className="cart-item">
              <img src={product.image} alt={product.name}/>
              <div className="item-details">
                <p className="item-name">{product.name}</p>
                <p className="item-price">${product.pricing}</p>
                <div className="quantity-container">
                  <span className="quantity-label">Quantity:</span>
                  <button className="quantity-button" onClick={() => onQtyChange(product._id, Math.max(1, cart.quantities[index] - 1))}>-</button>
                  <span>{cart.quantities[index]}</span>
                  <button className="quantity-button" onClick={() => onQtyChange(product._id, cart.quantities[index] + 1)}>+</button>
                </div>
                <p className="total-price">Total Price: ${product.pricing * cart.quantities[index]}</p>
                <button className="remove-button" onClick={() => deleteProduct(product._id)}>Remove</button>
              </div>
            </li>
          ))}

        </ul>
      )}
      {cart.products.length > 0 && (
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
