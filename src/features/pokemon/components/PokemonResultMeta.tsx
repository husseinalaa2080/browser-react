import { getPokemonResultSummary } from '@/features/pokemon/utils/getPokemonResultSummary';

type PaginationMetaProps = {
  currentPage: number;
  isFetching?: boolean;
  pageSize: number;
  totalItems: number;
  variant: 'pagination';
};

type LoadMoreMetaProps = {
  isFetching?: boolean;
  loadedCount: number;
  totalItems: number;
  variant: 'load-more';
};

type PokemonResultMetaProps = PaginationMetaProps | LoadMoreMetaProps;

export const PokemonResultMeta = (props: PokemonResultMetaProps) => (
  <div className="result-meta">
    <p>{getPokemonResultSummary(props)}</p>
    <span className={`result-meta__pill ${props.isFetching ? 'result-meta__pill--live' : ''}`}>
      {props.isFetching ? 'Refreshing...' : 'Data ready'}
    </span>
  </div>
);
