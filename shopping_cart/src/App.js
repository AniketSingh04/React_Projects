import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import './Styles/App.css';
import Cart from './Components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [showShop, setShowShop] = useState(true); // State to control which component to show

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <div>
      <Navbar size={cart.length} setShowShop={setShowShop}/>
      {showShop ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} warning={warning} />
      )}
      {warning && (
        <div className='warning'>
          Item Already Present in Cart
        </div>
      )}
    </div>
  );
};

export default App;
