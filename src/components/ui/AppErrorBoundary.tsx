import type { ReactNode } from 'react';
import { Component } from 'react';

import { AppErrorFallback } from '@/components/ui/AppErrorFallback';

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  override state: AppErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  private handleReset = () => {
    window.location.reload();
  };

  override render() {
    if (this.state.hasError) {
      return <AppErrorFallback onReset={this.handleReset} />;
    }

    return this.props.children;
  }
}
