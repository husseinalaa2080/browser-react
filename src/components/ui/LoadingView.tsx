import { StatePanel } from '@/components/ui/StatePanel';

type LoadingViewProps = {
  label: string;
};

export const LoadingView = ({ label }: LoadingViewProps) => (
  <StatePanel
    ariaLive="polite"
    copy="Fetching fresh data from the PokeAPI."
    media={<span aria-hidden="true" className="state-card__spinner" />}
    role="status"
    title={label}
  />
);
