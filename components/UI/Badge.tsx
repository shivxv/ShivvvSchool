import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'danger' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'info' }) => {
  return (
    <span className={clsx(
      "px-2.5 py-1 text-xs font-semibold rounded-full tracking-wide inline-flex items-center justify-center w-fit",
      {
        'bg-brand-success/10 text-brand-success': variant === 'success',
        'bg-brand-accent/10 text-brand-accent': variant === 'warning',
        'bg-brand-danger/10 text-brand-danger': variant === 'danger',
        'bg-brand-primary/10 text-brand-primary': variant === 'info',
      }
    )}>
      {children}
    </span>
  );
};