const capitalizeWord = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export const formatPokemonLabel = (value: string) =>
  value.split('-').map(capitalizeWord).join(' ');
