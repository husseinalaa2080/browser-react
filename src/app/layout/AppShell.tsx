import { Outlet, useLocation } from 'react-router-dom';

import { ShellHeader } from '@/app/layout/ShellHeader';
import { getShellTheme } from '@/app/layout/getShellTheme';

export const AppShell = () => {
  const location = useLocation();
  const theme = getShellTheme(location.pathname);

  return (
    <div className={`app-shell ${theme}`}>
      <div className="app-shell__panel">
        <ShellHeader />
        <main className="shell-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
