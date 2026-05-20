# Design System

The visual foundation lives in `src/styles.css` using Tailwind CSS v4 CSS variables.

## Tokens

Use semantic tokens instead of raw values:

- `background`, `foreground`
- `card`, `card-foreground`
- `primary`, `primary-foreground`
- `secondary`, `secondary-foreground`
- `muted`, `muted-foreground`
- `accent`, `accent-foreground`
- `border`, `hairline`, `input`, `ring`
- `matcha`, `matcha-soft`
- `destructive`, `destructive-foreground`

Typography:

- Sans: Inter
- Serif: Instrument Serif

Layout:

- Main page container: `Container`
- Max width: `1400px`
- Horizontal padding: `px-6 lg:px-10`

## Component Rules

- Use `Container` for page-width content.
- Use `SectionHeader` for section eyebrow/title/description patterns.
- Use `PageShell` for pages that need the standard nav/footer frame.
- Use `Reveal` for scroll entrance animation when a section needs motion.
- Use shadcn/Radix components from `src/components/ui` for interactive primitives.

## Styling Rules

- Prefer semantic Tailwind classes backed by CSS variables.
- Avoid hardcoded colors in components.
- Keep arbitrary values limited to places where the visual identity needs exact editorial sizing.
- Preserve the current warm editorial palette unless a full redesign is explicitly requested.
- Keep cards and media corners consistent with existing radius tokens.

## Motion

Primary motion uses the editorial easing curve declared in CSS tokens:

- `--ease-editorial`
- `--duration-slow`

Avoid adding motion that changes page meaning or blocks interaction.
