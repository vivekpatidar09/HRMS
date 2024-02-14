import React from 'react';
import {NavLink } from 'react-router-dom';

function PayrollManagement() {
  return (
     <div className='main-container'>
      <NavLink to="/attendance">
            <button className = 'prev'>❮</button>
            </NavLink>

            <NavLink to="/performance">
            <button className = 'next'>❯</button>
            </NavLink>

    <div className='div-1'>
      <img src="./Images/Untitled design (10) 2.png" />
    </div>

    <div className='div-2'>
      <h3>Payroll Management</h3>
      <li>Swift processing.</li>
      <li>Precision in payouts.</li>
      <li>Full compliance assurance.</li>
    </div>
  </div>
  )
}

export default PayrollManagement;