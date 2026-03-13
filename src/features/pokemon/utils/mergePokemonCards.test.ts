import { describe, expect, it } from 'vitest';

import { mergePokemonCards } from '@/features/pokemon/utils/mergePokemonCards';

describe('mergePokemonCards', () => {
  it('keeps unique Pokemon by id across batches', () => {
    const firstBatch = [
      { detailPath: '/pokemon/1', id: 1, imageUrl: '1.png', label: 'Bulbasaur', numberLabel: '#001' },
      { detailPath: '/pokemon/2', id: 2, imageUrl: '2.png', label: 'Ivysaur', numberLabel: '#002' },
    ];
    const secondBatch = [
      { detailPath: '/pokemon/2', id: 2, imageUrl: '2b.png', label: 'Ivysaur', numberLabel: '#002' },
      { detailPath: '/pokemon/3', id: 3, imageUrl: '3.png', label: 'Venusaur', numberLabel: '#003' },
    ];

    expect(mergePokemonCards([firstBatch, secondBatch])).toEqual([
      { detailPath: '/pokemon/1', id: 1, imageUrl: '1.png', label: 'Bulbasaur', numberLabel: '#001' },
      { detailPath: '/pokemon/2', id: 2, imageUrl: '2b.png', label: 'Ivysaur', numberLabel: '#002' },
      { detailPath: '/pokemon/3', id: 3, imageUrl: '3.png', label: 'Venusaur', numberLabel: '#003' },
    ]);
  });
});
