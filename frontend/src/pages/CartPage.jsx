// src/pages/CartPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard'; // Assuming you want to reuse ProductCard
import '../styles/CartPage.css'; // Assuming you have some CSS for styling

const CartPage = () => {
  const { cartItems, updateCartItem, removeItemFromCart } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleQuantityChange = (itemId, quantity, stock) => {
    if (quantity <= 0 || quantity > stock) return;
    updateCartItem(itemId, quantity);
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <ProductCard product={item} />
                <div className="cart-item-details">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value), item.stock)}
                    min="1"
                    max={item.stock}
                  />
                  <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
