import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
        <input
          type={type}
          ref={ref}
          className={twMerge(
            "w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-brand-dark/50 border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-gray-900 dark:text-white transition-all",
            error && "border-brand-danger focus:ring-brand-danger/50",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-brand-danger font-medium mt-0.5">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';