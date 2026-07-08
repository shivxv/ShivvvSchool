import React from 'react';

interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
      <table className="w-full text-left border-collapse bg-white dark:bg-brand-dark/40">
        <thead>
          <tr className="bg-gray-50/70 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60 text-sm text-gray-700 dark:text-gray-300">
          {children}
        </tbody>
      </table>
    </div>
  );
};