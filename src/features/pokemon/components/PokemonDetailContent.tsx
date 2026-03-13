import type { PokemonDetailModel } from '@/features/pokemon/types/pokemon';
import { PokemonDetailImagePanel } from '@/features/pokemon/components/PokemonDetailImagePanel';
import { PokemonStatCard } from '@/features/pokemon/components/PokemonStatCard';
import { PokemonTypesList } from '@/features/pokemon/components/PokemonTypesList';

type PokemonDetailContentProps = {
  pokemon: PokemonDetailModel;
};

export const PokemonDetailContent = ({ pokemon }: PokemonDetailContentProps) => (
  <div className="detail-layout">
    <PokemonDetailImagePanel
      artworkUrl={pokemon.artworkUrl}
      label={pokemon.label}
      spriteUrl={pokemon.spriteUrl}
    />
    <section className="detail-card">
      <p className="view-hero__eyebrow">Pokemon details</p>
      <h1 className="detail-card__title">{pokemon.label}</h1>
      <p className="detail-card__subtitle">{pokemon.numberLabel}</p>
      <div className="detail-stats">
        <PokemonStatCard label="Height" value={pokemon.heightLabel} />
        <PokemonStatCard label="Weight" value={pokemon.weightLabel} />
      </div>
      <div className="detail-types">
        <p className="detail-types__label">Types</p>
        <PokemonTypesList types={pokemon.types} />
      </div>
    </section>
  </div>
);
