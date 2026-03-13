import { QueryStateView } from '@/components/ui/QueryStateView';
import { PokemonBackLink } from '@/features/pokemon/components/PokemonBackLink';
import { PokemonDetailContent } from '@/features/pokemon/components/PokemonDetailContent';
import { PokemonInvalidRoute } from '@/features/pokemon/components/PokemonInvalidRoute';
import { usePokemonDetailQuery } from '@/features/pokemon/hooks/usePokemonDetailQuery';
import { usePokemonIdParam } from '@/features/pokemon/hooks/usePokemonIdParam';
import { getErrorMessage } from '@/utils/errors/getErrorMessage';

export const PokemonDetailPage = () => {
  const pokemonId = usePokemonIdParam();
  const query = usePokemonDetailQuery(pokemonId);

  if (pokemonId === null) {
    return <PokemonInvalidRoute />;
  }

  return (
    <section className="content-panel">
      <PokemonBackLink />
      <QueryStateView
        errorMessage={getErrorMessage(query.error)}
        errorTitle="Unable to load Pokemon details"
        isEmpty={!query.data}
        isError={query.isError}
        isLoading={query.isPending}
        loadingLabel="Loading Pokemon details"
        onRetry={() => void query.refetch()}
      >
        {query.data ? <PokemonDetailContent pokemon={query.data} /> : null}
      </QueryStateView>
    </section>
  );
};
