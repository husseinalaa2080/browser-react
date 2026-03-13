type PokemonDetailImagePanelProps = {
  artworkUrl: string;
  label: string;
  spriteUrl: string;
};

export const PokemonDetailImagePanel = ({
  artworkUrl,
  label,
  spriteUrl,
}: PokemonDetailImagePanelProps) => (
  <div className="detail-image-card">
    <img alt={label} className="detail-image-card__artwork" src={artworkUrl} />
    <div className="detail-image-card__sprite">
      <span className="detail-image-card__sprite-label">Sprite</span>
      <img alt={`${label} sprite`} src={spriteUrl} />
    </div>
  </div>
);
