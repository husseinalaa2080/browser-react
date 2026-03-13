import type { PokemonCardModel } from '@/features/pokemon/types/pokemon';
import { PokemonCard } from '@/features/pokemon/components/PokemonCard';

type PokemonGridProps = {
  items: PokemonCardModel[];
};

export const PokemonGrid = ({ items }: PokemonGridProps) => (
  <div className="pokemon-grid">
    {items.map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);
