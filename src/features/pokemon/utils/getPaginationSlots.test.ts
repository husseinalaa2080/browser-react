import { describe, expect, it } from 'vitest';

import { getPaginationSlots } from '@/features/pokemon/utils/getPaginationSlots';

describe('getPaginationSlots', () => {
  it('keeps the first window at the start', () => {
    expect(getPaginationSlots(1, 12)).toEqual([1, 2, 3, 4, 5]);
  });

  it('centers the current page when possible', () => {
    expect(getPaginationSlots(6, 12)).toEqual([4, 5, 6, 7, 8]);
  });

  it('keeps the last window near the end', () => {
    expect(getPaginationSlots(12, 12)).toEqual([8, 9, 10, 11, 12]);
  });
});
