import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchPokemonPage } from '@/features/pokemon/api/pokemonApi';
import { POKEMON_PAGE_SIZE } from '@/features/pokemon/constants';

export const usePokemonPaginationQuery = (page: number) =>
  useQuery({
    queryKey: ['pokemon', 'pagination', page],
    queryFn: () => fetchPokemonPage(page, POKEMON_PAGE_SIZE),
    placeholderData: keepPreviousData,
  });
