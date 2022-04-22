import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../pages/auth/login/login';
import Home from '../pages/home';
import Dashboard from '../pages/home/dashboard/dashboard';
import ProtectRoute from './protect';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
