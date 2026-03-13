import { pokemonDetailSchema, pokemonListSchema } from '@/features/pokemon/api/pokemonSchemas';
import { mapPokemonBatchResponse } from '@/features/pokemon/mappers/mapPokemonBatchResponse';
import { mapPokemonDetail } from '@/features/pokemon/mappers/mapPokemonDetail';
import { mapPokemonListResponse } from '@/features/pokemon/mappers/mapPokemonListResponse';
import { getOffsetFromPage } from '@/features/pokemon/utils/getOffsetFromPage';
import { getJson } from '@/utils/http/getJson';

// API layer
const apiBaseUrl = 'https://pokeapi.co/api/v2';

const buildListUrl = (limit: number, offset: number) => {
  const url = new URL('/api/v2/pokemon', apiBaseUrl);
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('offset', String(offset));
  return url;
};

const buildDetailUrl = (pokemonId: number) => new URL(`/api/v2/pokemon/${pokemonId}`, apiBaseUrl);

export const fetchPokemonPage = async (page: number, pageSize: number) => {
  // keep API shapes out of UI
  const response = await getJson(buildListUrl(pageSize, getOffsetFromPage(page, pageSize)), pokemonListSchema);
  return mapPokemonListResponse(response, page, pageSize);
};

export const fetchPokemonBatch = async (offset: number, pageSize: number) => {
  const response = await getJson(buildListUrl(pageSize, offset), pokemonListSchema);
  return mapPokemonBatchResponse(response);
};

export const fetchPokemonDetail = async (pokemonId: number) => {
  const response = await getJson(buildDetailUrl(pokemonId), pokemonDetailSchema);
  return mapPokemonDetail(response);
};
