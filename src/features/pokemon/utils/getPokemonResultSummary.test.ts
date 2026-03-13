import { describe, expect, it } from 'vitest';

import { getPokemonResultSummary } from '@/features/pokemon/utils/getPokemonResultSummary';

describe('getPokemonResultSummary', () => {
  it('formats pagination copy with page and range details', () => {
    expect(
      getPokemonResultSummary({
        currentPage: 2,
        pageSize: 20,
        totalItems: 1302,
        variant: 'pagination',
      }),
    ).toBe('Page 2 of 66 · Showing 21-40 of 1302');
  });

  it('formats load more copy with loaded totals', () => {
    expect(
      getPokemonResultSummary({
        loadedCount: 40,
        totalItems: 1302,
        variant: 'load-more',
      }),
    ).toBe('Showing 40 of 1302 Pokemon');
  });
});
