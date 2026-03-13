import type { PokemonDetailApiResponse } from '@/features/pokemon/api/pokemonSchemas';
import type { PokemonDetailModel } from '@/features/pokemon/types/pokemon';
import { formatPokemonHeight } from '@/features/pokemon/utils/formatPokemonHeight';
import { formatPokemonLabel } from '@/features/pokemon/utils/formatPokemonLabel';
import { formatPokemonNumber } from '@/features/pokemon/utils/formatPokemonNumber';
import { formatPokemonWeight } from '@/features/pokemon/utils/formatPokemonWeight';
import { getPokemonArtworkUrl } from '@/features/pokemon/utils/getPokemonArtworkUrl';

export const mapPokemonDetail = (response: PokemonDetailApiResponse): PokemonDetailModel => ({
  artworkUrl:
    response.sprites.other['official-artwork'].front_default ?? getPokemonArtworkUrl(response.id),
  heightLabel: formatPokemonHeight(response.height),
  id: response.id,
  label: formatPokemonLabel(response.name),
  numberLabel: formatPokemonNumber(response.id),
  spriteUrl: response.sprites.front_default ?? getPokemonArtworkUrl(response.id),
  types: [...response.types].sort((left, right) => left.slot - right.slot).map(({ type }) => ({
    label: formatPokemonLabel(type.name),
    value: type.name,
  })),
  weightLabel: formatPokemonWeight(response.weight),
});
