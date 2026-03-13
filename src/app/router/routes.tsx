import { Navigate, createBrowserRouter } from 'react-router-dom';

import { AppShell } from '@/app/layout/AppShell';
import { NotFoundPage } from '@/components/ui/NotFoundPage';
import { PokemonDetailPage } from '@/features/pokemon/pages/PokemonDetailPage';
import { PokemonLoadMorePage } from '@/features/pokemon/pages/PokemonLoadMorePage';
import { PokemonPaginationPage } from '@/features/pokemon/pages/PokemonPaginationPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/pagination" replace /> },
      { path: 'pagination', element: <PokemonPaginationPage /> },
      { path: 'load-more', element: <PokemonLoadMorePage /> },
      { path: 'pokemon/:pokemonId', element: <PokemonDetailPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
