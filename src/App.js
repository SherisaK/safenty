import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Safety from './pages/UploadSafetyTip';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ReportIncident from './components/ReportForm';

// Placeholder components for other pages


function SafetyTips() {
  return <div className="p-6">Safety Tips Page (to be implemented)</div>;
}
function AdminPanel() {
  return <div className="p-6">Admin Panel Page (to be implemented)</div>;
}

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: 'green' }}>React is working!</h1>
    </div>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/report" element={<ReportIncident />} />
            <Route path="/safety-tips" element={<SafetyTips />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/report" element={<ReportIncident />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
