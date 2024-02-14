import React from 'react'
import {NavLink } from 'react-router-dom';

function ManagePerformance() {
  return (
    <div className='main-container'>
     <NavLink to="/payroll">
      <button className = 'prev'>❮</button>
      </NavLink>

      <NavLink to="/enhance">
      <button className = 'next'>❯</button>
      </NavLink>

    <div className='div-1'>
      <img src="./Images/Untitled design (10) 1 (3).png" />
    </div>

    <div className='div-2'>
      <h3>Performance management</h3>
      <li>Harmonize individual aspirations with organizational objectives.</li>
      <li>Establish clear performance metrics and monitor advancements</li>
      <li>Foster continuous learning opportunities and recognize accomplishments with meaningful rewards.</li>
    </div>
    
  </div>
  )
}

export default ManagePerformance