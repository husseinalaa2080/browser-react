const placeholders = Array.from({ length: 8 }, (_, index) => index);

export const PokemonGridSkeleton = () => (
  <div className="pokemon-grid">
    {placeholders.map((value) => (
      <div key={value} className="pokemon-card pokemon-card--skeleton" aria-hidden="true">
        <div className="pokemon-card__media pokemon-card__media--skeleton" />
        <div className="pokemon-card__body">
          <div className="skeleton-line skeleton-line--title" />
          <div className="skeleton-line skeleton-line--copy" />
        </div>
      </div>
    ))}
  </div>
);
