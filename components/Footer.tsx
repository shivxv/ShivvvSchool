import React from 'react';
import logoUrl from '../Assets/logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-brand-dark border-t border-gray-100 dark:border-gray-800/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="Shiv Academy logo" className="h-10 w-10 rounded-xl shadow-sm transition-transform duration-300 hover:rotate-6 hover:scale-110" />
          <span className="font-semibold text-gray-900 dark:text-white">Shiv Academy</span>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2026 Shiv Academy. Learning with purpose and possibility.
        </p>
      </div>
    </footer>
  );
};
