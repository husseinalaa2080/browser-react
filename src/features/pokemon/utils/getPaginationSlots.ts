import { PAGINATION_WINDOW_SIZE } from '@/features/pokemon/constants';

export const getPaginationSlots = (currentPage: number, totalPages: number) => {
  const startPage = Math.max(1, currentPage - Math.floor(PAGINATION_WINDOW_SIZE / 2));
  const endPage = Math.min(totalPages, startPage + PAGINATION_WINDOW_SIZE - 1);
  const normalizedStart = Math.max(1, endPage - PAGINATION_WINDOW_SIZE + 1);

  return Array.from(
    { length: endPage - normalizedStart + 1 },
    (_, index) => normalizedStart + index,
  );
};
