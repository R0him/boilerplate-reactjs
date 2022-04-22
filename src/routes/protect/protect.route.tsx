import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const ProtectRoute = () => {
  const useAuth = () => {
    const user = {loggedIn: false};
    return user && user.loggedIn;
  };
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={'/login'}/>;
};

export default ProtectRoute;
