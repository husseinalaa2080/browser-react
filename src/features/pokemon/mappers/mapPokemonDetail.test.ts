import { describe, expect, it } from 'vitest';

import { mapPokemonDetail } from '@/features/pokemon/mappers/mapPokemonDetail';

describe('mapPokemonDetail', () => {
  it('formats detail data and sorts types', () => {
    const response = {
      height: 17,
      id: 6,
      name: 'charizard',
      sprites: {
        front_default: 'https://pokeapi.co/sprites/6.png',
        other: {
          'official-artwork': {
            front_default: 'https://pokeapi.co/artwork/6.png',
          },
        },
      },
      types: [
        { slot: 2, type: { name: 'flying' } },
        { slot: 1, type: { name: 'fire' } },
      ],
      weight: 905,
    };

    expect(mapPokemonDetail(response)).toEqual({
      artworkUrl: 'https://pokeapi.co/artwork/6.png',
      heightLabel: '1.7 m',
      id: 6,
      label: 'Charizard',
      numberLabel: '#006',
      spriteUrl: 'https://pokeapi.co/sprites/6.png',
      types: [
        { label: 'Fire', value: 'fire' },
        { label: 'Flying', value: 'flying' },
      ],
      weightLabel: '90.5 kg',
    });
  });
});
