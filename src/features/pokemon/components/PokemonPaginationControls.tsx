import { PaginationStepButton } from '@/features/pokemon/components/PaginationStepButton';
import { PokemonPaginationPageButton } from '@/features/pokemon/components/PokemonPaginationPageButton';
import { getPaginationSlots } from '@/features/pokemon/utils/getPaginationSlots';

type PokemonPaginationControlsProps = {
  currentPage: number;
  isBusy: boolean;
  onChange: (page: number) => void;
  totalPages: number;
};

export const PokemonPaginationControls = ({
  currentPage,
  isBusy,
  onChange,
  totalPages,
}: PokemonPaginationControlsProps) => {
  const pages = getPaginationSlots(currentPage, totalPages);

  return (
    <nav aria-label="Pokemon pagination" className="pagination-bar">
      <PaginationStepButton
        disabled={isBusy || currentPage === 1}
        direction="previous"
        onClick={() => onChange(currentPage - 1)}
      />
      <div className="pagination-bar__pages">
        {pages.map((page) => (
          <PokemonPaginationPageButton
            key={page}
            isActive={page === currentPage}
            isBusy={isBusy}
            onChange={onChange}
            page={page}
          />
        ))}
      </div>
      <PaginationStepButton
        disabled={isBusy || currentPage === totalPages}
        direction="next"
        onClick={() => onChange(currentPage + 1)}
      />
    </nav>
  );
};
