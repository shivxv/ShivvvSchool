import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './UI/Button';
import logoUrl from '../Assets/logo.svg';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const location = useLocation();

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Classes', path: '/classes' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Payments', path: '/payments' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoUrl} alt="Shiv Academy logo" className="h-11 w-11 rounded-2xl bg-white p-2 shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Shiv Academy
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-brand-primary' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/admin-dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2.5 text-gray-600 dark:text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-brand-dark border-b border-gray-100 dark:border-gray-800 px-4 pt-2 pb-6 flex flex-col gap-3 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-2.5 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/admin-dashboard" className="w-full mt-2">
            <Button className="w-full">Dashboard Portal</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
