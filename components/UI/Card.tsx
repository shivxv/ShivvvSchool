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
        "glass-panel p-6 rounded-2xl shadow-premium overflow-hidden transition-all duration-300",
        hoverEffect ? 'hover:-translate-y-2 hover:shadow-xl hover:border-brand-primary/30' : '',
        className
      )}
    >
      {children}
    </div>
  );
};
