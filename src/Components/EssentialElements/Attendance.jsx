import React from 'react'
import { NavLink } from 'react-router-dom';

function Attendance() {
  return (
    <div className='main-container'>

            <NavLink to="/reports">
            <button className = 'prev'>❮</button>
            </NavLink>
            
            <NavLink to="/payroll">
      <button className = 'next'>❯</button>
    </NavLink>
      
      <NavLink to="/">
      <button className = 'prev'>❮</button>
      </NavLink>


    <div className='div-1'>
      <img src="./Images/Untitled design (10) 1 (2).png" />
    </div>

    <div className='div-2'>
      <h3>Efficiently track workforce presence</h3>
      <li>Gain instant access to real-time attendance insights.</li>
      <li>Streamline shift schedules and overtime management effortlessly.</li>
      <li>Uphold uniformity in attendance policies for enhanced consistency.</li>
    </div>

  </div>
  )
}

export default Attendance