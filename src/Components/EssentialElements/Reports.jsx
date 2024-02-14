import React from 'react'
import {NavLink } from 'react-router-dom';

function Reports() {
  return (
    <div className='main-container'>
      <NavLink to="/enhance">
            <button className = 'prev'>❮</button>
            </NavLink>

            <NavLink to="/">
      <button className = 'next'>❯</button>
      </NavLink>

    <div className='div-1'>
      <img src="./Images/Untitled design (10) 1 (5).png" />
    </div>

    <div className='div-2'>
      <h3>HRMS</h3>
      <li>Streamline and accelerate HR functions.</li>
      <li>Provide an unparalleled employee experience.</li>
      <li>Efficiently manage employee information in a centralized hub.</li>
    </div>

  </div>
  )
}

export default Reports