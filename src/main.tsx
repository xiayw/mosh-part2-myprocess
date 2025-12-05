import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import './index.css';

const MINUTE = 1000 * 60;
const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      retry: 3,
      gcTime: 5 * MINUTE,
      staleTime: 10 * MINUTE,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false
         
      },
    }
  }
  
);
ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
    </QueryClientProvider>

  </React.StrictMode>
);
