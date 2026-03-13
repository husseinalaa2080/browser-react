import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppProviders } from '@/app/providers/AppProviders';
import { AppRouter } from '@/app/router/AppRouter';
import { AppErrorBoundary } from '@/components/ui/AppErrorBoundary';
import '@/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </AppErrorBoundary>
  </React.StrictMode>,
);
