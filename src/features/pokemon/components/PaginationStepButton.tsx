import { Button } from '@/components/ui/Button';

type PaginationStepButtonProps = {
  direction: 'next' | 'previous';
  disabled: boolean;
  onClick: () => void;
};

const labels = {
  next: 'Next',
  previous: 'Previous',
};

export const PaginationStepButton = ({
  direction,
  disabled,
  onClick,
}: PaginationStepButtonProps) => (
  <Button
    aria-label={`Go to ${direction} page`}
    disabled={disabled}
    onClick={onClick}
    variant="secondary"
  >
    {labels[direction]}
  </Button>
);
