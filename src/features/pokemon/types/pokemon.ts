export type PokemonCardModel = {
  detailPath: string;
  id: number;
  imageUrl: string;
  label: string;
  numberLabel: string;
};

export type PokemonPageModel = {
  items: PokemonCardModel[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type PokemonBatchModel = {
  items: PokemonCardModel[];
  nextOffset: number | null;
  totalItems: number;
};

export type PokemonTypeModel = {
  label: string;
  value: string;
};

export type PokemonDetailModel = {
  artworkUrl: string;
  heightLabel: string;
  id: number;
  label: string;
  numberLabel: string;
  spriteUrl: string;
  types: PokemonTypeModel[];
  weightLabel: string;
};
