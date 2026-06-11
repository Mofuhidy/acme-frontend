# Whitepace SaaS Landing Page

Production-quality implementation of the Whitepace SaaS landing page design using Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Project Status

This repository follows a staged Git flow:

1. Push the base scaffold to `main`.
2. Build each feature batch on a separate `feat/...` branch.
3. Open a pull request for each feature batch.
4. Review and merge each pull request before starting the next batch.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vercel

## Development Commands

```bash
npm run dev
npm run lint
npm run build
```

## Planned Component Structure

```txt
src/
  app/
  components/
    layout/
    sections/
    ui/
  content/
  lib/
```

## Implementation Notes

- The Figma file is the visual source of truth.
- The Google Doc assessment is the acceptance checklist.
- Animation and transitions should use CSS-first patterns, with client JavaScript only where interaction requires it.
- Performance checks apply to every pull request.
- Dark mode will be implemented as the final feature batch before documentation and deployment.
