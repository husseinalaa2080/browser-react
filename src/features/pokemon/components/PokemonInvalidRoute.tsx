import { ButtonLink } from '@/components/ui/ButtonLink';
import { StatePanel } from '@/components/ui/StatePanel';

export const PokemonInvalidRoute = () => (
  <section className="content-panel content-panel--compact">
    <StatePanel
      action={<ButtonLink to="/pagination">Back to browser</ButtonLink>}
      copy="Use the browser views to open a real Pokemon details page."
      eyebrow="Invalid route"
      title="A valid Pokemon id is required"
    />
  </section>
);
