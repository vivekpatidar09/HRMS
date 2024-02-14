import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

function Header() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='head-container'>
        <div className='head-contain'>
            <img src="./Images/365.png" alt=''/>
            <div className= {openMenu ? "cate-btn active" : "cate-btn" }>
            <h4>Pricing</h4>
            <h4>About us</h4>
            <h4>Products</h4>
            <h4>Contact us</h4>
            <CancelIcon className='close-icon'  onClick={()=>{
              setOpenMenu()
            }}/>

            </div>
            <MenuIcon className='menu-icon' 
            onClick ={()=>{
              setOpenMenu(true)
            }} />
            
            <button>Login</button>
            
        </div>
    </div>
  )
}

export default Header
