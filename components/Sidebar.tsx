import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, GraduationCap, DollarSign } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Overview', path: '/admin-dashboard', icon: LayoutDashboard },
    { name: 'Faculty Hub', path: '/faculty', icon: Users },
    { name: 'Classrooms', path: '/classes', icon: BookOpen },
    { name: 'Enrollments', path: '/admissions', icon: GraduationCap },
    { name: 'Financials', path: '/payments', icon: DollarSign },
  ];

  return (
    <aside className="w-64 fixed h-[calc(100vh-5rem)] bg-white dark:bg-brand-dark border-r border-gray-100 dark:border-gray-800 hidden lg:flex flex-col justify-between p-6">
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">Management Workspace</p>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-900/60 rounded-2xl flex items-center gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-brand-success animate-pulse" />
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Core Engine Online</span>
      </div>
    </aside>
  );
};