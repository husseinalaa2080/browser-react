import { useParams } from 'react-router-dom';

import { parsePositiveInt } from '@/utils/number/parsePositiveInt';

export const usePokemonIdParam = () => {
  const params = useParams<{ pokemonId: string }>();
  return parsePositiveInt(params.pokemonId);
};
