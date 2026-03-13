import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchPokemonBatch } from '@/features/pokemon/api/pokemonApi';
import { POKEMON_PAGE_SIZE } from '@/features/pokemon/constants';
import { mergePokemonCards } from '@/features/pokemon/utils/mergePokemonCards';

export const usePokemonLoadMoreQuery = () => {
  const query = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['pokemon', 'load-more'],
    queryFn: ({ pageParam }) => fetchPokemonBatch(pageParam, POKEMON_PAGE_SIZE),
    getNextPageParam: (lastPage) => lastPage.nextOffset ?? undefined,
  });

  const items = mergePokemonCards(query.data?.pages.map((page) => page.items) ?? []);
  const totalItems = query.data?.pages[0]?.totalItems ?? 0;

  return { ...query, items, totalItems };
};
