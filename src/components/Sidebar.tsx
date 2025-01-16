import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Settings, LineChart } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="navbar navbar-vertical navbar-expand-md bg-white">
      <div className="container-fluid">
        <div className="navbar-brand">
          <h5 className="mb-0">Soft UI</h5>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarVertical">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link d-flex align-items-center">
                <LayoutDashboard size={18} className="me-2" />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sales" className="nav-link d-flex align-items-center">
                <LineChart size={18} className="me-2" />
                Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/authors" className="nav-link d-flex align-items-center">
                <Users size={18} className="me-2" />
                Authors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/settings" className="nav-link d-flex align-items-center">
                <Settings size={18} className="me-2" />
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;