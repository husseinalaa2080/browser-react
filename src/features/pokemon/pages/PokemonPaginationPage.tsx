import { QueryStateView } from '@/components/ui/QueryStateView';
import { PokemonGrid } from '@/features/pokemon/components/PokemonGrid';
import { PokemonGridSkeleton } from '@/features/pokemon/components/PokemonGridSkeleton';
import { PokemonPaginationControls } from '@/features/pokemon/components/PokemonPaginationControls';
import { PokemonResultMeta } from '@/features/pokemon/components/PokemonResultMeta';
import { PokemonViewLayout } from '@/features/pokemon/components/PokemonViewLayout';
import { usePaginationPage } from '@/features/pokemon/hooks/usePaginationPage';
import { usePokemonPaginationQuery } from '@/features/pokemon/hooks/usePokemonPaginationQuery';
import { getErrorMessage } from '@/utils/errors/getErrorMessage';

export const PokemonPaginationPage = () => {
  const { page, setPage } = usePaginationPage();
  const query = usePokemonPaginationQuery(page);
  const data = query.data;

  return (
    <PokemonViewLayout
      badge="Pagination view"
      description="Browse Pokemon in crisp batches with stable numbered controls and a responsive card grid."
      title="Pokemon browser with page controls"
    >
      <QueryStateView
        errorMessage={getErrorMessage(query.error)}
        errorTitle="Unable to load this Pokemon page"
        isEmpty={!data?.items.length}
        isError={query.isError}
        isLoading={query.isPending}
        loadingFallback={<PokemonGridSkeleton />}
        loadingLabel="Loading Pokemon page"
        onRetry={() => void query.refetch()}
      >
        <PokemonResultMeta
          currentPage={data?.page ?? page}
          isFetching={query.isFetching}
          pageSize={data?.pageSize ?? 20}
          totalItems={data?.totalItems ?? 0}
          variant="pagination"
        />
        <PokemonGrid items={data?.items ?? []} />
        <PokemonPaginationControls
          currentPage={data?.page ?? page}
          isBusy={query.isFetching}
          onChange={setPage}
          totalPages={data?.totalPages ?? 1}
        />
      </QueryStateView>
    </PokemonViewLayout>
  );
};
