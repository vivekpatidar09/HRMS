import React from 'react'
import {NavLink } from 'react-router-dom';

function EnhanceConnectivity() {
  return (
    <div className='main-container'>

    <NavLink to="/performance">
    <button className = 'prev'>❮</button>
    </NavLink>

    <NavLink to="/reports">
      <button className = 'next'>❯</button>
      </NavLink>

    <div className='div-1'>
      <img src="./Images/Untitled design (10) 1 (4).png" />
    </div>

    <div className='div-2'>
      <h3>Enhance employee connectivity with our mobile app</h3>
      <li>Reducing HR workload.</li>
      <li>Fostering transparency.</li>
      <li>Boosting engagement and satisfaction.</li>
    </div>
    
  </div>
  )
}

export default EnhanceConnectivity