import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchPokemonPage } from '@/features/pokemon/api/pokemonApi';
import { POKEMON_PAGE_SIZE } from '@/features/pokemon/constants';

// cache server state outside UI
export const usePokemonPaginationQuery = (page: number) =>
  useQuery({
    queryKey: ['pokemon-page', page],
    queryFn: () => fetchPokemonPage(page, POKEMON_PAGE_SIZE),
    // keep previous results visible
    placeholderData: keepPreviousData,
  });
