import { ButtonLink } from '@/components/ui/ButtonLink';
import { StatePanel } from '@/components/ui/StatePanel';

export const NotFoundPage = () => (
  <section className="content-panel content-panel--compact">
    <StatePanel
      action={<ButtonLink to="/pagination">Back to browser</ButtonLink>}
      copy="The route you requested does not exist in this Pokedex."
      eyebrow="404"
      title="Page not found"
    />
  </section>
);
