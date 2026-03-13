import { Button } from '@/components/ui/Button';
import { StatePanel } from '@/components/ui/StatePanel';

type AppErrorFallbackProps = {
  onReset: () => void;
};

export const AppErrorFallback = ({ onReset }: AppErrorFallbackProps) => (
  <div className="app-shell shell-theme-detail">
    <section className="app-shell__panel content-panel content-panel--compact">
      <StatePanel
        action={<Button onClick={onReset}>Reload app</Button>}
        copy="Please reload the app and try again."
        eyebrow="Unexpected error"
        title="Something went wrong"
        tone="error"
      />
    </section>
  </div>
);
