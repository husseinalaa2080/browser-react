import type { ReactNode } from 'react';

type PokemonViewLayoutProps = {
  badge: string;
  children: ReactNode;
  description: string;
  title: string;
};

export const PokemonViewLayout = ({
  badge,
  children,
  description,
  title,
}: PokemonViewLayoutProps) => (
  <section className="content-panel">
    <div className="view-hero">
      <p className="view-hero__eyebrow">{badge}</p>
      <h1 className="view-hero__title">{title}</h1>
      <p className="view-hero__copy">{description}</p>
    </div>
    {children}
  </section>
);
