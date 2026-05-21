# Contributing

## Setup

Use npm as the official package manager. The repository should keep `package-lock.json` and should not commit Bun, pnpm, or Yarn lockfiles.

```bash
npm install
npm run dev
```

## Quality Checks

Run these before handing off changes:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Development Rules

- Keep route files thin.
- Put reusable layout in `src/components/layout`.
- Put page sections in `src/components/sections`.
- Put shared UI primitives in `src/components/ui`.
- Put feature content and data in `src/features`.
- Use semantic CSS variables and Tailwind utilities from `src/styles.css`.
- Preserve existing behavior unless a task explicitly changes it.

## Package Management

Do not mix lockfiles. This project standardizes on npm via `package-lock.json` and the `packageManager` field in `package.json`.

## Before Opening A PR

- Remove unused imports and dead code.
- Confirm responsive layouts on mobile and desktop.
- Confirm keyboard access for interactive elements.
- Verify production build output.
- Do not commit `node_modules`, `dist`, `.output`, `.vinxi`, or `.vercel`.
