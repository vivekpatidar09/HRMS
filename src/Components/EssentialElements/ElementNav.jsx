import React, { useEffect, useState } from "react";
import "./ElementNav.css";
import { NavLink } from "react-router-dom";

function ElementNav() {
  return (
    <div>
      <div className="element-div">
        <h1>Essential elements </h1>
        <h3>for cultivating your path to success</h3>

        <div className="btns">
          <NavLink to="/">
            <button>Leave Management</button>
          </NavLink>

          <NavLink to="/attendance">
            <button>Attendance</button>
          </NavLink>
          <NavLink to="/payroll">
            <button>Payroll Management</button>
          </NavLink>
          <NavLink to="performance">
            <button>Manage Performance</button>
          </NavLink>
          <NavLink to="/enhance">
            <button>Enhance connectivity</button>
          </NavLink>
          <NavLink to="/reports">
            <button>Reports</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ElementNav;
