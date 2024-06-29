import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/Navbar.css'


const Navbar = ({size, setShowShop}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my-shop'>
                PrimePicks 
            </span>
            <div className='cart' onClick={()=> setShowShop(false)}>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
