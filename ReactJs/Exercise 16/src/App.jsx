import React, { useState } from 'react';
import CartContext from './CartContext';
import ProductItem from './ProductItem';
import CartSummary from './CartSummary';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = { cartItems, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="cno" price={19} />
      <ProductItem itemId={2} itemName="qaro" price={29} />
      <CartSummary />
    </CartContext.Provider>
  );
}

export default App;
