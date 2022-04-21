import React from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container__login">
      <button
        type="button"
        onClick={() => navigate('/dashboard')}
        className="button__login"
      >
        <span className="text__login">LOGIN</span>
      </button>
    </div>
  );
};

export default Login;
