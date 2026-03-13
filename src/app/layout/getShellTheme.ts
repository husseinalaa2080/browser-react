export const getShellTheme = (pathname: string) => {
  if (pathname.startsWith('/load-more')) {
    return 'shell-theme-mint';
  }

  if (pathname.startsWith('/pokemon/')) {
    return 'shell-theme-detail';
  }

  return 'shell-theme-sky';
};
