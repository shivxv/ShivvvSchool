import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-brand-dark border-t border-gray-100 dark:border-gray-800/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-primary text-white rounded-lg">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">Vanguard Educational Repository</span>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2026 Vanguard Academy. Systems engineering engineered cleanly with global accessibility.
        </p>
      </div>
    </footer>
  );
};