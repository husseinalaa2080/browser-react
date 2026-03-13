import { QueryStateView } from '@/components/ui/QueryStateView';
import { PokemonGrid } from '@/features/pokemon/components/PokemonGrid';
import { PokemonGridSkeleton } from '@/features/pokemon/components/PokemonGridSkeleton';
import { LoadMoreAction } from '@/features/pokemon/components/LoadMoreAction';
import { PokemonResultMeta } from '@/features/pokemon/components/PokemonResultMeta';
import { PokemonViewLayout } from '@/features/pokemon/components/PokemonViewLayout';
import { usePokemonLoadMoreQuery } from '@/features/pokemon/hooks/usePokemonLoadMoreQuery';
import { getErrorMessage } from '@/utils/errors/getErrorMessage';

export const PokemonLoadMorePage = () => {
  const query = usePokemonLoadMoreQuery();

  return (
    <PokemonViewLayout
      badge="Load more view"
      description="Append fresh Pokemon cards smoothly without duplicate entries or unstable list state."
      title="Pokemon browser with incremental loading"
    >
      <QueryStateView
        errorMessage={getErrorMessage(query.error)}
        errorTitle="Unable to load Pokemon batches"
        isEmpty={!query.items.length}
        isError={query.isError}
        isLoading={query.isPending}
        loadingFallback={<PokemonGridSkeleton />}
        loadingLabel="Loading initial Pokemon batch"
        onRetry={() => void query.refetch()}
      >
        <PokemonResultMeta
          isFetching={query.isFetching && !query.isFetchingNextPage}
          loadedCount={query.items.length}
          totalItems={query.totalItems}
          variant="load-more"
        />
        <PokemonGrid items={query.items} />
        <LoadMoreAction
          hasNextPage={Boolean(query.hasNextPage)}
          isLoading={query.isFetchingNextPage}
          onLoadMore={() => void query.fetchNextPage()}
        />
      </QueryStateView>
    </PokemonViewLayout>
  );
};
