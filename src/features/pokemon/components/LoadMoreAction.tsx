import { Button } from '@/components/ui/Button';

type LoadMoreActionProps = {
  hasNextPage: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
};

export const LoadMoreAction = ({
  hasNextPage,
  isLoading,
  onLoadMore,
}: LoadMoreActionProps) =>
  hasNextPage ? (
    <div className="load-more-action">
      <Button disabled={isLoading} onClick={onLoadMore}>
        {isLoading ? 'Loading more...' : 'Load More'}
      </Button>
    </div>
  ) : null;
