import type { PokemonCardModel } from '@/features/pokemon/types/pokemon';

export const mergePokemonCards = (pages: PokemonCardModel[][]) => {
  const registry = new Map<number, PokemonCardModel>();

  pages.flat().forEach((pokemon) => {
    registry.set(pokemon.id, pokemon);
  });

  return Array.from(registry.values());
};
