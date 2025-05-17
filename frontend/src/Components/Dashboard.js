import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Dashboard/Navbar';
import Sidebar from './Dashboard/Sidebar';
import AddBeneficiary from './Dashboard/AddBeneficiary';
import NeedsTable from './Dashboard/NeedsTable';
import Success from './Dashboard/Success';
import History from './Dashboard/History';
import Profile from './Dashboard/Profile';

import '../css/dashboard.css';
import UserComponent from './Dashboard/UserComponent';
import ViewBenificaries from './Dashboard/ViewBenificaries';
import EditBeneficiary from './Dashboard/EditBeneficiary';

const Dashboard = () => {
  const isType = localStorage.getItem('type');

  return (
    <>
      <Navbar />
      <Sidebar />
      <main style={{ marginTop: '58px' }}>
        <div className="container pt-4">
          <Routes>
            <Route
              path="/add-beneficary"
              element={isType === "volunteer" || isType === "admin" ? <AddBeneficiary /> : <Navigate to="/main/dashboard" />}
            />

<Route
              path="/all-benificaries"
              element={isType === "volunteer" || isType === "admin" ? <ViewBenificaries /> : <Navigate to="/main/dashboard" />}
            />

<Route
              path="/edit/:id"
              element={isType === "volunteer" || isType === "admin" ? <EditBeneficiary /> : <Navigate to="/main/dashboard" />}
            />

            <Route
              path='/profile'
              element={<Profile />} />

<Route
              path="/all-users"
              element={isType === "admin" ? <UserComponent /> : <Navigate to="/main/dashboard" />}
            />


            <Route
              path='/dashboard'
              element={<NeedsTable />} />

            <Route
              path='/success'
              element={<Success />} />

            <Route
              path='/history'
              element={<History />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
export default Dashboard;
