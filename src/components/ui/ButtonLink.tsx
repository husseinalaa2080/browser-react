import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  children: ReactNode;
  to: string;
};

export const ButtonLink = ({ children, to }: ButtonLinkProps) => (
  <Link className="ui-button ui-button--primary" to={to}>
    {children}
  </Link>
);
