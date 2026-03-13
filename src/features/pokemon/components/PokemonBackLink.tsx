import { Link, useLocation } from 'react-router-dom';

import { getPokemonBackTarget } from '@/features/pokemon/utils/getPokemonBackTarget';

export const PokemonBackLink = () => {
  const location = useLocation();
  // Preserve the source view.
  const backTo = getPokemonBackTarget(location.state);

  return (
    <Link className="back-link" to={backTo}>
      Back to browser
    </Link>
  );
};
