import { RouterProvider } from 'react-router-dom';

import { appRouter } from '@/app/router/routes';

export const AppRouter = () => <RouterProvider router={appRouter} />;
