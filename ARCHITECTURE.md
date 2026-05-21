# Architecture

This app is a TanStack Start portfolio built on Vite, React, TypeScript, and Tailwind CSS v4.

## Application Shape

- `src/routes`: file-based TanStack Router routes and route metadata.
- `src/components/layout`: layout primitives shared across pages.
- `src/components/sections`: composed page sections for marketing and portfolio pages.
- `src/components/site`: site-level shell pieces such as navigation, footer, reveal animation, and case-study layout.
- `src/components/ui`: shadcn/Radix UI primitives. Keep these generic and reusable.
- `src/features`: feature-specific content, configuration, or orchestration.
- `src/hooks`: reusable React hooks.
- `src/lib`: shared utilities and framework helpers.
- `src/styles.css`: Tailwind v4 theme, CSS variables, and global utilities.
- `src/types`: shared TypeScript contracts.

## Routing

Routes use TanStack Router file conventions. Keep route files thin:

- route metadata
- route-level loaders when needed
- page composition

Large UI sections should live in `src/components/sections`, and reusable business or content data should live in `src/features`.

## Rendering

TanStack Start is configured directly in `vite.config.ts` with Vite plugins for TanStack Start, Nitro, React, Tailwind CSS, and TypeScript path aliases.

Nitro provides the deployment adapter layer for Vercel. Keep platform-specific deployment configuration out of UI components.

## Build Targets

The production build emits:

- `dist/client` for browser assets
- `.output` for Nitro server output
- `.vercel/output` when running the Vercel build preset

Do not commit generated build output or dependency folders.
