import { useSearchParams } from 'react-router-dom';

import { parsePositiveInt } from '@/utils/number/parsePositiveInt';

export const usePaginationPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // keep pages shareable via URL
  const page = parsePositiveInt(searchParams.get('page')) ?? 1;

  const setPage = (nextPage: number) => {
    const nextParams = new URLSearchParams(searchParams);

    if (nextPage === 1) {
      // keep page one clean
      nextParams.delete('page');
    } else {
      nextParams.set('page', String(nextPage));
    }

    setSearchParams(nextParams);
  };

  return { page, setPage };
};
