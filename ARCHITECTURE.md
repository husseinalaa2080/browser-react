# Architecture Overview

## Application Idea

This application is a small Pokemon browser built with React and TypeScript.

It allows users to:

* browse Pokemon using pagination
* load more Pokemon progressively
* view detailed information for each Pokemon

The goal of the project is to demonstrate clean frontend architecture, predictable data flow, and clear UI state handling.

## Tech Stack

The project is built using:

* React
* TypeScript (strict mode)
* Vite
* React Router
* TanStack Query
* Zod (runtime validation)
* Vitest (testing)
* ESLint + Prettier

## Project Structure

The codebase uses a feature-based structure:

```text
src/
app/                 # routing and providers
components/          # shared UI components
features/pokemon/    # pokemon domain
api/
hooks/
mappers/
components/
pages/
utils/               # reusable helpers
styles/
```

This structure keeps domain logic grouped together and avoids scattering related files across the project.

## Data Fetching

TanStack Query is used to manage server state.

It provides:

* caching
* background refetching
* loading and error state management
* minimal boilerplate compared to Redux

## Pagination Strategy

Pagination state is stored in the URL query parameters.

Example:
`?page=2`

This allows:

* bookmarkable pages
* shareable links
* proper browser navigation behavior.

## API Mapping

API responses are mapped into internal UI models using mapper functions.

This keeps UI components independent from external API response shapes.

## UI States

The application explicitly handles:

* loading
* error
* retry
* empty state

This ensures predictable and user-friendly behavior.
