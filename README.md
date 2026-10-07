# Krafted Lab — Vee Trimidal

A responsive portfolio for Vee Trimidal, Personal Brand Strategist and Systems Builder, and the Krafted Lab ecosystem. Built with React, TypeScript, React Router, and Vite.

## Run

Use Node 22+ and pnpm 11:

```sh
pnpm install
pnpm dev
pnpm build
pnpm lint
```

Production output is `dist/`. Configure your static host to serve `index.html` for unknown paths so direct links to `/projects`, `/services`, `/about`, `/method`, and `/contact` work.

## Content

- `src/data/krafted.ts`: services, project summaries, and the KRAFTED Method.
- `src/Portfolio.tsx`: page content and interactions.
- `src/styles/portfolio.css`: responsive design and brand palette.
- `.env.example`: optional public booking or email link.

The copy follows the September 2026 Krafted Lab brand guidelines and Vee personal-brand positioning. Ecosystem entries describe products and frameworks, not completed client engagements. Brand OS is explicitly marked in development. Illustrations are original CSS compositions, not screenshots or evidence of shipped product features. No fabricated testimonials, client names, metrics, credentials, or stock portrait are used.

## Contact

The contact page validates input and creates a project brief locally, with copy and download actions. It does **not** send messages or store submissions remotely. Set `VITE_PUBLIC_CONTACT_URL` to a verified booking link or `mailto:` address and rebuild to enable the connection link. A public destination has not yet been supplied.

## Attribution

Adapted from the linked portfolio template. Original license and attribution are retained in `LICENSE`. Unused sample pages, images, and components were removed to prevent template content from being published as real work.
