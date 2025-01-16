import React from 'react';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, trend, color }: {
  title: string;
  value: string;
  icon: React.ElementType;
  trend: string;
  color: string;
}) => (
  <div className="card">
    <div className="card-body p-4">
      <div className="d-flex align-items-center">
        <div className="flex-grow-1">
          <p className="text-secondary mb-1 text-sm">{title}</p>
          <h4 className="mb-2 font-weight-bold">{value}</h4>
          <p className="mb-0 text-success text-sm">
            {trend}
          </p>
        </div>
        <div className={`icon-shape icon-shape-${color} text-white ms-3`}>
          <Icon size={20} />
        </div>
      </div>
    </div>
  </div>
);

const DashboardStats = () => {
  return (
    <div className="row g-4">
      <div className="col-xl-3 col-sm-6">
        <StatsCard
          title="Total Users"
          value="36.2k"
          icon={Users}
          trend="+3.5% this month"
          color="primary"
        />
      </div>
      <div className="col-xl-3 col-sm-6">
        <StatsCard
          title="Revenue"
          value="$103,430"
          icon={DollarSign}
          trend="+5.2% this month"
          color="info"
        />
      </div>
      <div className="col-xl-3 col-sm-6">
        <StatsCard
          title="New Orders"
          value="3,462"
          icon={ShoppingCart}
          trend="+2.4% this month"
          color="success"
        />
      </div>
      <div className="col-xl-3 col-sm-6">
        <StatsCard
          title="Growth"
          value="+23%"
          icon={TrendingUp}
          trend="+12% this quarter"
          color="warning"
        />
      </div>
    </div>
  );
};

export default DashboardStats;