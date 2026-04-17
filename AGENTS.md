# SEENIK lander — agent instructions

Concise rules for coding in this repo. For Cursor-specific mechanics, see [Cursor Rules](https://cursor.com/docs/context/rules); this file is the project’s single source for conventions.

## Stack

- React (Vite), TypeScript, Tailwind CSS.
- Shared UI under `src/app/components/ui/` (shadcn-style primitives: `Button`, `cn`, etc.).

## Components and UI

- Prefer the shared [`Button`](src/app/components/ui/button.tsx) (`buttonVariants`) for interactive controls so pointer cursor, focus rings, and disabled behavior stay consistent.
- If you use a raw `<button>`, add `cursor-pointer` for the default state and `disabled:cursor-not-allowed` (or similar) when disabled—do not rely on browser defaults alone for affordances.
- Match existing layout patterns: Tailwind utility classes, spacing, and typography already used in neighboring components.
- Keep changes minimal; don’t refactor unrelated code in the same pass.

## Assets and content

- Showcase imagery lives under `src/assets/showcase/`.
- Listing URLs and similar config belong in [`src/app/config.ts`](src/app/config.ts) rather than hard-coded in many files.

## Nested instructions (optional)

You may add a stricter `AGENTS.md` under `src/` later for frontend-only rules; Cursor merges nested files with more specific directories taking precedence.
