import React from 'react';
import SideBar from '../components/SideBar';
import MainDashboard from '../components/MainDashboard';
import './dashboardpage.css';

function DashboardPage() {
  return (
    <div className="dashboard__container">
      <SideBar />
      <MainDashboard />
    </div>
  );
}

export default DashboardPage;
