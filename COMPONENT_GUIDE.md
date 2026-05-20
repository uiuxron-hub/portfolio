# Component Guide

## Folder Responsibilities

- `components/ui`: low-level reusable primitives.
- `components/layout`: structural primitives with no portfolio-specific content.
- `components/sections`: composed sections for pages.
- `components/site`: site shell and portfolio-specific shared components.
- `features/portfolio`: portfolio content and feature data.

## Naming

- Components: `PascalCase.tsx`
- Hooks: `use-name.ts` or `use-name.tsx`
- Types: colocate local-only types, move shared contracts to `src/types`
- Feature content: descriptive domain names such as `content.ts`

## Composition

Keep route files small. A route should compose sections, not own all markup.

Good:

```tsx
<PageShell>
  <HeroSection />
  <SelectedWorkSection />
</PageShell>
```

Avoid:

```tsx
function RouteComponent() {
  // Hundreds of lines of section data and markup.
}
```

## Reuse Threshold

Extract a component when:

- the same layout pattern appears in multiple places
- a route grows large enough to hide intent
- styling rules need to stay consistent across pages
- data and presentation can be separated without making the code harder to read

Do not extract tiny one-off wrappers only to satisfy folder structure.

## Accessibility

- Images need useful `alt` text unless decorative.
- Navigation links must remain keyboard reachable.
- Interactive controls should use existing Radix/shadcn primitives where possible.
- Preserve visible focus states.
- Do not use `href="#"` for production links. Replace placeholders with real URLs or remove them before launch.
