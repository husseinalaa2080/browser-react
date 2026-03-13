import type { PokemonListApiResponse } from '@/features/pokemon/api/pokemonSchemas';
import type { PokemonPageModel } from '@/features/pokemon/types/pokemon';
import { mapPokemonCard } from '@/features/pokemon/mappers/mapPokemonCard';

export const mapPokemonListResponse = (
  response: PokemonListApiResponse,
  page: number,
  pageSize: number,
): PokemonPageModel => ({
  items: response.results.map(mapPokemonCard),
  page,
  pageSize,
  totalItems: response.count,
  totalPages: Math.ceil(response.count / pageSize),
});
