import { z } from 'zod';

const pokemonListItemSchema = z.object({
  name: z.string().min(1),
  url: z.string().url(),
});

export const pokemonListSchema = z.object({
  count: z.number().int().nonnegative(),
  next: z.string().url().nullable(),
  previous: z.string().url().nullable(),
  results: z.array(pokemonListItemSchema),
});

export const pokemonDetailSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  height: z.number().int().nonnegative(),
  weight: z.number().int().nonnegative(),
  types: z.array(
    z.object({
      slot: z.number().int().positive(),
      type: z.object({
        name: z.string().min(1),
      }),
    }),
  ),
  sprites: z.object({
    front_default: z.string().url().nullable(),
    other: z.object({
      'official-artwork': z.object({
        front_default: z.string().url().nullable(),
      }),
    }),
  }),
});

export type PokemonDetailApiResponse = z.infer<typeof pokemonDetailSchema>;
export type PokemonListApiResponse = z.infer<typeof pokemonListSchema>;
export type PokemonListItemApiResponse = z.infer<typeof pokemonListItemSchema>;
