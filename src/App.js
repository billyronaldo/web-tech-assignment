import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Account from './Account';
import ProductDetail from './ProductDetail';
import './App.css';

const NavBar = ({ setPage }) => (
  <nav>
    <ul>
      <li>
        <button onClick={() => setPage('productList')}>Home</button>
      </li>
      <li>
        <button onClick={() => setPage('cart')}>Shopping Cart</button>
      </li>
      <li>
        <button onClick={() => setPage('account')}>Account</button>
      </li>
    </ul>
  </nav>
);

const App = () => {
  const [page, setPage] = useState('productList');
  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState({
    shippingAddress: '',
  });

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };

  const updateQuantity = (product, quantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };
  

  return (
    <div>
      <header>
        <h1>Gift Shop</h1>
        <NavBar setPage={setPage} />
      </header>
      <main>
        {page === 'productList' && <ProductList addToCart={addToCart} setPage={setPage}/>}
        {page === 'productDetail' && <ProductDetail addToCart={addToCart} setPage={setPage} />}
        {page === 'cart' && <ShoppingCart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />}
        {page === 'account' && <Account userInfo={userInfo} updateUserInfo={updateUserInfo} />}
      </main>
    </div>
  );
};

export default App;
