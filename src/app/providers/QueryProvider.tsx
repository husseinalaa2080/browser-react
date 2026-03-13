import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import { createAppQueryClient } from '@/app/providers/createAppQueryClient';

const queryClient = createAppQueryClient();

type QueryProviderProps = {
  children: ReactNode;
};

export const QueryProvider = ({ children }: QueryProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
