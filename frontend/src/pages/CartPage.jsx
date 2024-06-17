import React from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard'; // Assuming you want to reuse ProductCard

const CartPage = () => {
  const { cartItems, updateCartItem, removeItemFromCart } = useCart();

  const handleQuantityChange = (itemId, quantity, stock) => {
    if (quantity <= 0 || quantity > stock) return;
    updateCartItem(itemId, quantity);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
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
      )}
    </div>
  );
};

export default CartPage;
