import type { PokemonOrigin } from '@/features/pokemon/types/navigation';

const defaultTarget = '/pagination';

const isPokemonOrigin = (value: unknown): value is PokemonOrigin =>
  Boolean(
    value &&
      typeof value === 'object' &&
      'pathname' in value &&
      typeof value.pathname === 'string' &&
      'search' in value &&
      typeof value.search === 'string',
  );

export const getPokemonBackTarget = (state: unknown) => {
  if (!state || typeof state !== 'object' || !('from' in state)) {
    return defaultTarget;
  }

  const from = state.from;

  if (!isPokemonOrigin(from)) {
    return defaultTarget;
  }

  return `${from.pathname}${from.search}`;
};
