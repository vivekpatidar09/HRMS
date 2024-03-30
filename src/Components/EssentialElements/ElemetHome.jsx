import React from "react";
import ElementNav from "./ElementNav";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import LeaveManagement from "./LeaveManagement";
import Attendance from "./Attendance";
import PayrollManagement from "./PayrollManagement";
import ManagePerformance from "./ManagePerformance";
import EnhanceConnectivity from "./EnhanceConnectivity";
import Reports from "./Reports";

function ElemetHome() {
  return (
    <div>
      <BrowserRouter>
        <ElementNav></ElementNav>
        <Routes>
          <Route path="/" element={<LeaveManagement />}></Route>
          <Route path="/attendance" element={<Attendance />}></Route>
          <Route path="/payroll" element={<PayrollManagement />}></Route>
          <Route path="/performance" element={<ManagePerformance />}></Route>
          <Route path="/enhance" element={<EnhanceConnectivity />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
        </Routes>
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <NavLink to="/">
            <span class="dot1"></span>
          </NavLink>

          <NavLink to="/attendance">
            <span class="dot1"></span>
          </NavLink>

          <NavLink to="/payroll">
            <span class="dot1"></span>
          </NavLink>

          <NavLink to="/performance">
            <span class="dot1"></span>
          </NavLink>

          <NavLink to="/enhance">
            <span class="dot1"></span>
          </NavLink>

          <NavLink to="/reports">
            <span class="dot1"></span>
          </NavLink>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default ElemetHome;
