// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: '50px' }} />
            {item.title} - ${item.price} x {item.quantity}
            <div>
              <button onClick={() => dispatch(addItem(item))}>+</button>
              <button onClick={() => dispatch(removeItem(item.id))}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
