# Pokemon Browser

A small Pokemon browser built with React, TypeScript, Vite, React Router, and TanStack Query.

See **ARCHITECTURE.md** for a brief overview of the project structure and design decisions.

## Scripts

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run test`
- `npm run build`

## Features

- Pagination list view
- Load More list view
- Dedicated Pokemon details route
- Loading, error, retry, and empty states
- Responsive layout for desktop, tablet, and mobile
- Strict TypeScript with typed API parsing and mappers

## Technical notes

- TanStack Query keeps network state out of the UI components. That keeps the pages focused on rendering while caching, retries, and stale data stay in one place.
- Pagination lives in the URL so refresh, copy-paste, and back/forward navigation return to the same page the user was viewing.
- Load More does not use URL state on purpose. It behaves more like a session interaction than a shareable location.
- Raw PokeAPI responses are mapped before they reach the UI. It is a small app, but the UI stays simpler when fallback rules and formatting happen at the edge.
- Loading and error handling sit near the page boundaries. That keeps retry behavior obvious and avoids pushing fetch concerns into small presentational components.

## Structure

```text
src/
  app/
  components/
  features/pokemon/
  styles/
  test/
  utils/
```
