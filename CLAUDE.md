# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Columbia University Africa Alumni (CU-AA)** - A web application for the CU-AA community, supporting rich interactive features (Directory, Auth, Member Area).

**Stack:**
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Auth:** Clerk
- **Database:** Neon Postgres (`@neondatabase/serverless`) for user profiles and app data
- **Styling:** Vanilla CSS (CSS Modules + Global CSS variables)
- **Deployment:** Netlify (Target)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev      # http://localhost:3000

# Build for production
npm run build
npm start

# Linting
npm run lint
```

## Architecture

- **`src/app/`**: App Router pages and layouts.
- **`src/middleware.ts`**: Clerk authentication middleware.
- **`src/utils/db.ts`**: Neon database client utility.
- **`components/`**: Reusable React components.
- **`public/assets/`**: Static assets (images, icons).

## Clerk Setup (Authentication)

Clerk handles all authentication (sign-up, sign-in, session management).

1. Go to [clerk.com](https://clerk.com) and create an application.
2. Copy the publishable key and secret key to `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
   CLERK_SECRET_KEY=sk_...
   ```
3. Configure sign-in/sign-up URLs in `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

## Neon Setup (Database)

Neon Postgres stores extended user profiles and application data not managed by Clerk.

1. Project: `cu-aa-site` (ID: `muddy-hat-07657199`) on Neon.
2. The `profiles` table schema is in `supabase_setup.sql` (still valid for Neon).
3. Add the connection string to `.env.local`:
   ```
   DATABASE_URL=postgresql://...@....neon.tech/neondb?sslmode=require
   ```

**Note:** User profiles are linked to Clerk users via `clerk_user_id`.

## Styling Guidelines

- **Global Styles:** `src/app/globals.css` contains the design system (Variables, Typography, Buttons).
- **CSS Modules:** Use `*.module.css` for component-specific styles.
- **Brand Colors:**
  - Blue: `var(--columbia-blue)`
  - Light Blue: `var(--columbia-light-blue)`
  - Red: `var(--accent-red)`

## Deployment

See `DEPLOYMENT.md` for detailed instructions on deploying to Netlify, including:
- Environment variable configuration
- Clerk production setup
- Neon database setup
- Custom domain configuration
- Production checklist

**Key files:**
- `netlify.toml` - Netlify build configuration
- `next.config.ts` - Next.js production optimizations

## TODO

- None currently.
