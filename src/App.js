import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

// Placeholder components for other pages
function Report() {
  return <div className="p-6">Report an Incident Page (to be implemented)</div>;
}
function SafetyTips() {
  return <div className="p-6">Safety Tips Page (to be implemented)</div>;
}
function AdminPanel() {
  return <div className="p-6">Admin Panel Page (to be implemented)</div>;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
            <Route path="/safety-tips" element={<SafetyTips />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
