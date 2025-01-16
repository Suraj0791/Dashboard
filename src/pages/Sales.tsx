import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const monthlyData = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
  { name: 'Jul', sales: 3490, profit: 4300 },
];

const dailyData = [
  { name: 'Mon', sales: 1000 },
  { name: 'Tue', sales: 1200 },
  { name: 'Wed', sales: 900 },
  { name: 'Thu', sales: 1500 },
  { name: 'Fri', sales: 1800 },
  { name: 'Sat', sales: 1200 },
  { name: 'Sun', sales: 800 },
];

const Sales = () => {
  return (
    <div className="container-fluid py-4">
      <div className="mb-4">
        <h4 className="font-weight-bold mb-0">Sales Analytics</h4>
        <p className="text-secondary mb-0">Detailed sales performance metrics</p>
      </div>

      {/* Monthly Performance */}
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6 className="mb-0">Monthly Performance</h6>
          <p className="text-sm mb-0 text-secondary">Sales vs Profit Analysis</p>
        </div>
        <div className="card-body p-3">
          <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#8392ab" fontSize={12} />
                <YAxis stroke="#8392ab" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  name="Sales"
                  stroke="#cb0c9f"
                  strokeWidth={3}
                  dot={{ fill: '#cb0c9f', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  name="Profit"
                  stroke="#17c1e8"
                  strokeWidth={3}
                  dot={{ fill: '#17c1e8', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Daily Sales */}
      <div className="card">
        <div className="card-header pb-0">
          <h6 className="mb-0">Daily Sales Distribution</h6>
          <p className="text-sm mb-0 text-secondary">Sales performance by day of week</p>
        </div>
        <div className="card-body p-3">
          <div style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#8392ab" fontSize={12} />
                <YAxis stroke="#8392ab" fontSize={12} />
                <Tooltip />
                <Bar
                  dataKey="sales"
                  name="Daily Sales"
                  fill="#82d616"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;