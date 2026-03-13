import type { PokemonListApiResponse } from '@/features/pokemon/api/pokemonSchemas';
import type { PokemonBatchModel } from '@/features/pokemon/types/pokemon';
import { mapPokemonCard } from '@/features/pokemon/mappers/mapPokemonCard';
import { getOffsetFromNextUrl } from '@/features/pokemon/utils/getOffsetFromNextUrl';

export const mapPokemonBatchResponse = (response: PokemonListApiResponse): PokemonBatchModel => ({
  items: response.results.map(mapPokemonCard),
  nextOffset: getOffsetFromNextUrl(response.next),
  totalItems: response.count,
});
