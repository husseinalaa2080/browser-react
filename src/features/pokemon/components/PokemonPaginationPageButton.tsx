type PokemonPaginationPageButtonProps = {
  isActive: boolean;
  isBusy: boolean;
  onChange: (page: number) => void;
  page: number;
};

export const PokemonPaginationPageButton = ({
  isActive,
  isBusy,
  onChange,
  page,
}: PokemonPaginationPageButtonProps) => (
  <button
    aria-current={isActive ? 'page' : undefined}
    aria-label={isActive ? `Current page, ${page}` : `Go to page ${page}`}
    className={`pagination-chip ${isActive ? 'pagination-chip--active' : ''}`}
    disabled={isBusy}
    onClick={() => onChange(page)}
    type="button"
  >
    {page}
  </button>
);
