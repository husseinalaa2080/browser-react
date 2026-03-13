export const getPokemonIdFromResource = (resourceUrl: string) => {
  const match = resourceUrl.match(/\/pokemon\/(\d+)\/?$/);
  const value = match?.[1];

  if (!value) {
    return null;
  }

  const pokemonId = Number(value);
  return Number.isInteger(pokemonId) && pokemonId > 0 ? pokemonId : null;
};
