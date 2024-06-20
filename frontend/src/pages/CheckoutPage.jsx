// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../api';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      payment_method: paymentMethod,
      pickup_date: paymentMethod === 'pickup' ? pickupDate : null,
      pickup_time: paymentMethod === 'pickup' ? pickupTime : null,
    };

    try {
      await createOrder(orderData);
      setMessage('Order placed successfully!');
      navigate('/order-success'); // Navigate to a success page or order summary
    } catch (error) {
      setMessage('Failed to place order.');
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="cod">Cash on Delivery</option>
              <option value="pickup">Scheduled Pickup</option>
            </select>
          </label>
        </div>
        {paymentMethod === 'pickup' && (
          <>
            <div>
              <label>
                Pickup Date:
                <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />
              </label>
            </div>
            <div>
              <label>
                Pickup Time:
                <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} required />
              </label>
            </div>
          </>
        )}
        <button type="submit">Place Order</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CheckoutPage;
