import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Faculty } from '../pages/Faculty';
import { Classes } from '../pages/Classes';
import { AdmissionForm } from '../pages/AdmissionForm';
import { OnlineFeePayment } from '../pages/OnlineFeePayment';
import { AdminDashboard } from '../dashboards/AdminDashboard';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Facing System Node */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/admissions" element={<AdmissionForm />} />
        <Route path="/payments" element={<OnlineFeePayment />} />
      </Route>

      {/* Operations & Dashboards Isolation Node */}
      <Route element={<DashboardLayout />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Route>

      {/* Safe Catch-All Fault Fallback Block */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};