import { describe, expect, it } from 'vitest';

import { getPokemonBackTarget } from '@/features/pokemon/utils/getPokemonBackTarget';

describe('getPokemonBackTarget', () => {
  it('returns the stored origin when available', () => {
    expect(
      getPokemonBackTarget({
        from: {
          pathname: '/pagination',
          search: '?page=3',
        },
      }),
    ).toBe('/pagination?page=3');
  });

  it('falls back to the pagination route', () => {
    expect(getPokemonBackTarget(null)).toBe('/pagination');
  });
});
