import { useQuery } from '@tanstack/react-query';

import { fetchPokemonDetail } from '@/features/pokemon/api/pokemonApi';

// cache server state outside UI
export const usePokemonDetailQuery = (pokemonId: number | null) =>
  useQuery({
    // skip invalid route params
    enabled: pokemonId !== null,
    queryKey: ['pokemon-detail', pokemonId],
    queryFn: () => {
      if (pokemonId === null) {
        throw new Error('A valid Pokemon id is required.');
      }

      return fetchPokemonDetail(pokemonId);
    },
  });
