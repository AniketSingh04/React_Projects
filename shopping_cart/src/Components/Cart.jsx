import React, { useState } from 'react';
import '../Styles/Cart.css';

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  return (
    <div className='cart-container'>
      {cart?.map((item) => (
        <div className='cart-box' key={item.id}>
          <div className='cart-item'>
            <img src={item.img} alt='Product' className='cart-img' />
            <p className='cart-title'>{item.title}</p>
          </div>
          <div className='cart-controls'>
            <button className='cart-btn'>+</button>
            <button className='cart-btn'>-</button>
          </div>
          <div className='cart-price'>
            <span>${item.price}</span>
            <button
              className='cart-remove-btn'
              onClick={() => setCart(cart.filter((c) => c.id !== item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

