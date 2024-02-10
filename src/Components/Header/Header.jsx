import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='head-container'>
        <div className='head-contain'>
            <img src="./Images/365.png" alt=''/>
            {/* <div className='cate-btn' > */}
            <h4>Pricing</h4>
            <h4>About us</h4>
            <h4>Products</h4>
            <h4>Contact us</h4>
            {/* </div> */}
            <button>Login</button>
        </div>
    </div>
  )
}

export default Header