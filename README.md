# Assignment-6 — FitLog

FitLog is a responsive dark workout library and daily workout planner built for the B14-A6 assignment. Users can browse workouts from the provided API, open details, add lifts to today's plan, save workouts for later, and manage their plan from one place.

## Technologies

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- Lucide React icons
- React Hot Toast
- FitLog REST API
- localStorage

## Key Features

1. Responsive FitLog dashboard matching the supplied dark Figma-style design.
2. Workout library with API data, responsive cards, and sorting by duration, calories, or rating.
3. Dynamic workout details pages with specs, instructions, and action buttons.
4. Today's Plan with a five-workout cap, live exercise/minute/calorie metrics, Mark as Done, and Remove.
5. Saved workouts tab with persistent localStorage data.
6. Navbar counters for Plan and Saved items.
7. Loading state, toast notifications, and a custom 404 page.
8. Deployment-safe App Router routes suitable for Vercel, Netlify, or Cloudflare Pages.

## API

Primary: `https://api.abcz.workers.dev/api/fitlog`

Fallback: `https://api.api-store.workers.dev/api/fitlog`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for deployment

```bash
npm run build
npm start
```

## Suggested Git commits

```text
1. initialized Assignment-6 Next.js project
2. added FitLog API and workout types
3. added responsive navbar and footer
4. added home hero and workout library
5. added workout details page and actions
6. added My Plan and Saved tabs
7. added sorting, toasts, localStorage and five-lift cap
8. added 404 page and deployment README
```
