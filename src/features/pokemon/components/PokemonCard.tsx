import { Link, useLocation } from 'react-router-dom';

import type { PokemonCardModel } from '@/features/pokemon/types/pokemon';
import type { PokemonRouteState } from '@/features/pokemon/types/navigation';

type PokemonCardProps = {
  pokemon: PokemonCardModel;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const location = useLocation();
  const state: PokemonRouteState = {
    from: {
      pathname: location.pathname,
      search: location.search,
    },
  };

  return (
    <Link className="pokemon-card" state={state} to={pokemon.detailPath}>
      <article>
        <div className="pokemon-card__media">
          <img
            alt={pokemon.label}
            className="pokemon-card__image"
            loading="lazy"
            src={pokemon.imageUrl}
          />
        </div>
        <div className="pokemon-card__body">
          <h2 className="pokemon-card__name">{pokemon.label}</h2>
          <p className="pokemon-card__meta">{pokemon.numberLabel}</p>
        </div>
      </article>
    </Link>
  );
};
