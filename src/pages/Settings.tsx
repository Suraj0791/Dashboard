import React, { useState } from 'react';
import { Bell, Mail, Lock, User } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    monthly: true,
    security: true
  });

  return (
    <div className="container-fluid py-4">
      <div className="mb-4">
        <h4 className="font-weight-bold mb-0">Settings</h4>
        <p className="text-secondary mb-0">Manage your account settings</p>
      </div>

      {/* Profile Settings */}
      <div className="card mb-4">
        <div className="card-header pb-0">
          <div className="d-flex align-items-center">
            <User size={18} className="me-2" />
            <h6 className="mb-0">Profile Information</h6>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="First Name" defaultValue="John" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" defaultValue="Doe" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Email" defaultValue="john@example.com" />
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card mb-4">
        <div className="card-header pb-0">
          <div className="d-flex align-items-center">
            <Bell size={18} className="me-2" />
            <h6 className="mb-0">Notification Settings</h6>
          </div>
        </div>
        <div className="card-body">
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={notifications.email}
              onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
            />
            <label className="form-check-label">Email Notifications</label>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={notifications.push}
              onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
            />
            <label className="form-check-label">Push Notifications</label>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={notifications.monthly}
              onChange={(e) => setNotifications({...notifications, monthly: e.target.checked})}
            />
            <label className="form-check-label">Monthly Reports</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={notifications.security}
              onChange={(e) => setNotifications({...notifications, security: e.target.checked})}
            />
            <label className="form-check-label">Security Alerts</label>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card">
        <div className="card-header pb-0">
          <div className="d-flex align-items-center">
            <Lock size={18} className="me-2" />
            <h6 className="mb-0">Security Settings</h6>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <input type="password" className="form-control" placeholder="Current Password" />
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input type="password" className="form-control" placeholder="New Password" />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <input type="password" className="form-control" placeholder="Confirm New Password" />
            </div>
            <button type="submit" className="btn btn-primary">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;