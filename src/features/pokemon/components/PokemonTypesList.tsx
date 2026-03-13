import type { PokemonTypeModel } from '@/features/pokemon/types/pokemon';

type PokemonTypesListProps = {
  types: PokemonTypeModel[];
};

export const PokemonTypesList = ({ types }: PokemonTypesListProps) => (
  <div className="type-list">
    {types.map((type) => (
      <span key={type.value} className="type-chip">
        {type.label}
      </span>
    ))}
  </div>
);
