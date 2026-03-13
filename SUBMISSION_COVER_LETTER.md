# Frontend Assessment Submission

I built a small Pokemon browser using React and TypeScript. The goal was to keep the app simple to use and the code easy to follow, similar to how I would structure a small real project.

The app has two browsing modes. The pagination view uses numbered controls for a more classic flow, and the load more view appends the next batch without duplicating cards or resetting the list. Each Pokemon also has its own detail page with the required data: name, sprite, height, weight, and types.

For data fetching I used TanStack Query so loading, caching, retry, and error handling stay consistent without pushing that logic deep into the UI components. I also kept the project split into small feature files so the API layer, mappers, hooks, and components stay readable and easy to navigate.
