import { ShellBrand } from '@/app/layout/ShellBrand';
import { ShellNav } from '@/app/layout/ShellNav';

export const ShellHeader = () => (
  <header className="shell-header">
    <ShellBrand />
    <ShellNav />
  </header>
);
