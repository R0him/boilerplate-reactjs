import React from 'react';
import {useNavigate} from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="container__dashboard">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="button__dashboard"
      >
        <span className="text__dashboard">DASHBOARD</span>
      </button>
    </div>
  );
};

export default Dashboard;
