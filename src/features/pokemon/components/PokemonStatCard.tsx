type PokemonStatCardProps = {
  label: string;
  value: string;
};

export const PokemonStatCard = ({ label, value }: PokemonStatCardProps) => (
  <div className="stat-card">
    <p className="stat-card__label">{label}</p>
    <p className="stat-card__value">{value}</p>
  </div>
);
