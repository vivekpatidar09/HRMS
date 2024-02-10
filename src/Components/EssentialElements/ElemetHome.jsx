import React from 'react'
import ElementNav from './ElementNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LeaveManagement from './LeaveManagement';
import Attendance from './Attendance';
import PayrollManagement from './PayrollManagement';
import ManagePerformance from './ManagePerformance';
import EnhanceConnectivity from './EnhanceConnectivity';
import Reports from './Reports';

function ElemetHome() {
  return (
    <div>
        <BrowserRouter>
           <ElementNav></ElementNav>
          <Routes>
           <Route path='/' element={<LeaveManagement/>}></Route>
           <Route path='/attendance' element={<Attendance/>}></Route>
           <Route path='/payroll' element={<PayrollManagement/>}></Route>
           <Route path='/performance' element={<ManagePerformance/>}></Route>
           <Route path='/enhance' element={<EnhanceConnectivity/>}></Route>
           <Route path='/reports' element={<Reports/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default ElemetHome