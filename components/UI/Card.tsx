import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true }) => {
  return (
    <div
      className={twMerge(
        "glass-panel p-6 rounded-2xl shadow-premium overflow-hidden transition-transform duration-200",
        hoverEffect ? 'hover:-translate-y-1 hover:shadow-xl' : '',
        className
      )}
    >
      {children}
    </div>
  );
};