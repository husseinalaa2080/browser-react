import { Button } from '@/components/ui/Button';
import { StatePanel } from '@/components/ui/StatePanel';

type ErrorViewProps = {
  message: string;
  onRetry: () => void;
  title: string;
};

export const ErrorView = ({ message, onRetry, title }: ErrorViewProps) => (
  <StatePanel
    action={<Button onClick={onRetry}>Retry request</Button>}
    copy={message}
    eyebrow="Unable to continue"
    role="alert"
    title={title}
    tone="error"
  />
);
