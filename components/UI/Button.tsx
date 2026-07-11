import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className, ...props }) => {
  return (
    <button
      className={twMerge(
        clsx(
          "button-motion rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2",
          {
            'bg-brand-primary text-white hover:bg-blue-700 focus:ring-brand-primary': variant === 'primary',
            'bg-brand-secondary text-white hover:bg-teal-600 focus:ring-brand-secondary': variant === 'secondary',
            'bg-brand-danger text-white hover:bg-red-600 focus:ring-brand-danger': variant === 'danger',
            'bg-transparent text-brand-dark dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800': variant === 'ghost',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-7 py-3.5 text-lg': size === 'lg',
          }
        ),
        className
      )}
      {...(props as any)}
    >
      {children}
    </button>
  );
};
