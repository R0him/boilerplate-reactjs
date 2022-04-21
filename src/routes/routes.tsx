import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../pages/auth/login/login';
import Home from '../pages/home';
import Dashboard from '../pages/home/dashboard/dashboard';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoute;
