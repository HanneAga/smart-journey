# Smart Journey

Smart Journey is a small project built with Next.js to explore modern web application architecture.

The app simulates a simple ferry booking experience where users can search for routes, filter the results, and get a suggested trip. The goal of the project is to experiment with features like the Next.js App Router, server and client components, and building clean, structured frontend code.

---

## Features

- Search for ferry routes
- Server-side data fetching
- Client-side price filtering
- AI-style route suggestion
- Loading UI for better user experience
- Responsive layout with Tailwind CSS

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

---

## Architecture

The project demonstrates a clear separation between server and client responsibilities.

### Server-side

- `app/search/page.tsx`
  - Reads query parameters
  - Fetches route data

- `lib/data.ts`
  - Simulates async data fetching

- `app/api/suggest/route.ts`
  - Handles the suggestion endpoint

### Client-side

- `components/SearchForm.tsx`
  - Handles search input and navigation

- `components/PriceFilter.tsx`
  - Client-side filtering using React state

- `components/AiSuggestion.tsx`
  - Calls the API endpoint to get a suggested route

---

## Project Structure
app/
page.tsx
search/page.tsx
search/loading.tsx
api/suggest/route.ts

components/
SearchForm.tsx
RouteList.tsx
PriceFilter.tsx
AiSuggestion.tsx

lib/
data.ts
types.ts


---

## What this project demonstrates

- Next.js App Router structure
- Server Components vs Client Components
- Query parameter routing
- API routes
- Clean component structure
- Modern frontend architecture

---

## Run the project locally

Install dependencies:


npm install


Start the development server:


npm run dev


Open the app:


http://localhost:3000


---

## Future improvements

Possible next steps for this project:

- Connect to a real API instead of mock data
- Add authentication
- Improve accessibility
- Add automated tests
- Deploy to a cloud platform