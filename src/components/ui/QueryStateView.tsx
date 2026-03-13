import type { ReactNode } from 'react';

import { EmptyView } from '@/components/ui/EmptyView';
import { ErrorView } from '@/components/ui/ErrorView';
import { LoadingView } from '@/components/ui/LoadingView';

type QueryStateViewProps = {
  children: ReactNode;
  errorMessage: string;
  errorTitle: string;
  isEmpty: boolean;
  isError: boolean;
  isLoading: boolean;
  loadingFallback?: ReactNode;
  loadingLabel: string;
  onRetry: () => void;
};

export const QueryStateView = ({
  children,
  errorMessage,
  errorTitle,
  isEmpty,
  isError,
  isLoading,
  loadingFallback,
  loadingLabel,
  onRetry,
}: QueryStateViewProps) => {
  if (isLoading) {
    return loadingFallback ? <>{loadingFallback}</> : <LoadingView label={loadingLabel} />;
  }

  if (isError) {
    return <ErrorView message={errorMessage} onRetry={onRetry} title={errorTitle} />;
  }

  if (isEmpty) {
    return <EmptyView title="Nothing to show yet" />;
  }

  return <>{children}</>;
};
