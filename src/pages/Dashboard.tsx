import React from 'react';
import DashboardStats from '../components/DashboardStats';
import SalesChart from '../components/SalesChart';

const Dashboard = () => {
  return (
    <div className="container-fluid py-4">
      <div className="mb-4">
        <h4 className="font-weight-bold mb-0">Dashboard</h4>
        <p className="text-secondary mb-0">Monitor your business metrics</p>
      </div>
      <DashboardStats />
      <div className="mt-4">
        <SalesChart />
      </div>
    </div>
  );
};

export default Dashboard;