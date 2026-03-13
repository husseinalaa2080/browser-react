import type { PokemonListItemApiResponse } from '@/features/pokemon/api/pokemonSchemas';
import type { PokemonCardModel } from '@/features/pokemon/types/pokemon';
import { formatPokemonLabel } from '@/features/pokemon/utils/formatPokemonLabel';
import { formatPokemonNumber } from '@/features/pokemon/utils/formatPokemonNumber';
import { getPokemonArtworkUrl } from '@/features/pokemon/utils/getPokemonArtworkUrl';
import { getPokemonIdFromResource } from '@/features/pokemon/utils/getPokemonIdFromResource';

export const mapPokemonCard = (item: PokemonListItemApiResponse): PokemonCardModel => {
  // map API shapes for UI
  const pokemonId = getPokemonIdFromResource(item.url);

  if (!pokemonId) {
    throw new Error('Unable to derive a Pokemon id.');
  }

  return {
    detailPath: `/pokemon/${pokemonId}`,
    id: pokemonId,
    imageUrl: getPokemonArtworkUrl(pokemonId),
    label: formatPokemonLabel(item.name),
    numberLabel: formatPokemonNumber(pokemonId),
  };
};
