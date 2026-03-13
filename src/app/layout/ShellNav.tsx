import { NavLink } from 'react-router-dom';

const links = [
  { to: '/pagination', label: 'Pagination' },
  { to: '/load-more', label: 'Load More' },
];

export const ShellNav = () => (
  <nav className="shell-nav" aria-label="Pokemon views">
    {links.map((link) => (
      <NavLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `shell-nav__link ${isActive ? 'shell-nav__link--active' : ''}`
        }
      >
        {link.label}
      </NavLink>
    ))}
  </nav>
);
