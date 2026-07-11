import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg dark:bg-brand-dark/95 flex flex-col">
      <Navbar />
      <div className="flex flex-1 pt-0">
        <Sidebar />
        <main className="motion-page flex-1 lg:pl-64 min-w-0 p-4 sm:p-8 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
