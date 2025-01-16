import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Authors from './pages/Authors';
import Settings from './pages/Settings';
import Sales from './pages/Sales';



function App() {
  return (
    <Router>
      <div className="g-sidenav-show">
        <Sidebar />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ms-md-250">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;