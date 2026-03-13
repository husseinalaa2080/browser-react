type PaginationMeta = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  variant: 'pagination';
};

type LoadMoreMeta = {
  loadedCount: number;
  totalItems: number;
  variant: 'load-more';
};

type PokemonResultSummaryProps = PaginationMeta | LoadMoreMeta;

export const getPokemonResultSummary = (props: PokemonResultSummaryProps) => {
  if (props.variant === 'load-more') {
    return `Showing ${props.loadedCount} of ${props.totalItems} Pokemon`;
  }

  const totalPages = Math.max(1, Math.ceil(props.totalItems / props.pageSize));
  const rangeStart = props.totalItems === 0 ? 0 : (props.currentPage - 1) * props.pageSize + 1;
  const rangeEnd = Math.min(props.currentPage * props.pageSize, props.totalItems);

  return `Page ${props.currentPage} of ${totalPages} · Showing ${rangeStart}-${rangeEnd} of ${props.totalItems}`;
};
