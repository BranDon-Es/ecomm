import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === product.id);
      if (item) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const updateCartItem = (itemId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== itemId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, updateCartItem, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
