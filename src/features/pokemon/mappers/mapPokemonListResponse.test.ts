import { describe, expect, it } from 'vitest';

import { mapPokemonListResponse } from '@/features/pokemon/mappers/mapPokemonListResponse';

describe('mapPokemonListResponse', () => {
  it('maps paginated API data into page metadata and cards', () => {
    const response = {
      count: 40,
      next: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20',
      previous: null,
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };

    expect(mapPokemonListResponse(response, 1, 20)).toEqual({
      items: [
        {
          detailPath: '/pokemon/1',
          id: 1,
          imageUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          label: 'Bulbasaur',
          numberLabel: '#001',
        },
        {
          detailPath: '/pokemon/2',
          id: 2,
          imageUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
          label: 'Ivysaur',
          numberLabel: '#002',
        },
      ],
      page: 1,
      pageSize: 20,
      totalItems: 40,
      totalPages: 2,
    });
  });
});
