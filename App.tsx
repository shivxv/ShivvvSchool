import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './routes/AppRoutes';

const operationalQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minute data caching retention
    },
  },
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={operationalQueryClient}>
      <BrowserRouter>
        <AppRoutes />
        <Toaster 
          position="top-right" 
          toastOptions={{
            duration: 4000,
            style: {
              background: '#111827',
              color: '#ffffff',
              borderRadius: '14px',
              fontSize: '14px',
            }
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
};