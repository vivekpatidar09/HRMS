import React from 'react';
import './ElementNav.css';
import { Link } from 'react-router-dom';
import LeaveManagement from './LeaveManagement';

function ElementNav() {
  return (
    <div>
        <div className="element-div">
        <h1>Essential elements </h1>
            <h3>for cultivating your path to success</h3>
            
            <div className='btns'>
              <Link to="/">
                <button>Leave Management</button>
              </Link>
            
              <Link to="/attendance">
                <button>Attendance</button>
              </Link>
              <Link to="/payroll">
                <button>Payroll Management</button>
              </Link>
              <Link to="performance">
                <button>Manage Performance</button>
              </Link>
              <Link to="/enhance">
                <button>Enhance connectivity</button>
              </Link>
              <Link to="/reports">
                <button>Reports</button>
              </Link>
            </div>

        </div>
    </div>
  )
}

export default ElementNav;