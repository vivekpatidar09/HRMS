import React, { useEffect, useState } from 'react';
import './LeaveManagement.css';
import {NavLink } from 'react-router-dom';

function LeaveManagement() {

  return (
    <div className='main-container'>

<div>
            <NavLink to="/reports">
            <button className = 'prev'>❮</button>
            </NavLink>
            <NavLink to="/attendance">
            <button className = 'next'>❯</button>
            </NavLink>


</div>

            <NavLink to="/reports">
            <button className = 'prev'>❮</button>
            </NavLink>
      <div className='div-1'>
        <img src="./Images/Untitled design (10) 1 (1).png" />
      </div>

      <div className='div-2'>
        <h3>Leave Management</h3>
        <li>Effortless Leave Administration.</li>
        <li>Precision in Leave Accounting.</li>
        <li>Smooth Integration Sith Payroll Processes.</li>
      </div>

    </div>
  )
}

export default LeaveManagement;